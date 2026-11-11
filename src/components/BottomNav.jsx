import React from 'react';
import {House,LayoutGrid,ShoppingBag,UserRound} from 'lucide-react';
import {useCart} from '../context/CartContext';
const tabs=[['inicio','Inicio',House],['catalogo','Catálogo',LayoutGrid],['carrito','Carrito',ShoppingBag],['perfil','Perfil',UserRound]];
export default function BottomNav({page,onNavigate}){const {count}=useCart();return <nav className="bottom-nav" aria-label="Navegación principal">{tabs.map(([key,label,Icon])=><button key={key} type="button" className={'tab '+(page===key?'selected':'')} onClick={()=>onNavigate(key)} aria-current={page===key?'page':undefined}><span className="tab-icon"><Icon size={21} strokeWidth={page===key?2.6:2}/>{key==='carrito'&&count>0&&<span className="cart-badge">{count}</span>}</span><span>{label}</span></button>)}</nav>}
