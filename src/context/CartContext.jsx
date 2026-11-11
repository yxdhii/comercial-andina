import React,{createContext,useContext,useEffect,useMemo,useState} from 'react';
import {products} from '../data/products';
const Context=createContext(null);
function load(){try{const x=JSON.parse(localStorage.getItem('ca-cart-v1')||'{}');return Object.fromEntries(Object.entries(x).filter(([id,q])=>products.some(p=>p.id===Number(id))&&Number.isInteger(q)&&q>0&&q<=99));}catch{return {}}}
export function CartProvider({children}){
 const [cart,setCart]=useState(load);
 useEffect(()=>{try{localStorage.setItem('ca-cart-v1',JSON.stringify(cart))}catch{}},[cart]);
 const add=id=>setCart(c=>({...c,[id]:Math.min(99,(c[id]||0)+1)}));
 const change=(id,delta)=>setCart(c=>{const n={...c},q=(n[id]||0)+delta;if(q<=0)delete n[id];else n[id]=Math.min(99,q);return n});
 const remove=id=>setCart(c=>{const n={...c};delete n[id];return n});
 const clear=()=>setCart({});
 const items=useMemo(()=>products.filter(p=>cart[p.id]).map(p=>({...p,qty:cart[p.id]})),[cart]);
 const count=items.reduce((n,p)=>n+p.qty,0);
 const subtotal=items.reduce((n,p)=>n+p.price*p.qty,0);
 // Precios incluyen IGV. El descuento de S/225 es una promoción simulada, solo si el subtotal supera S/3000.
 const discount=subtotal>=3000?225:0;
 const total=Math.max(0,subtotal-discount);
 const igv=total-(total/1.18);
 return <Context.Provider value={{cart,items,count,subtotal,discount,total,igv,add,change,remove,clear}}>{children}</Context.Provider>;
}
export const useCart=()=>useContext(Context);
