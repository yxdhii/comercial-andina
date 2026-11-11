import React,{useState} from 'react';
import {Image as ImageIcon} from 'lucide-react';
export default function ProductImage({product,className=''}){
 const [failed,setFailed]=useState(false);
 return <div className={'product-image '+className}>{!failed?<img src={product.image} alt={product.name} onError={()=>setFailed(true)} loading="lazy"/>:<div className="image-placeholder" aria-label={'Espacio reservado para la fotografía de '+product.name}><ImageIcon size={27} strokeWidth={1.4}/><span>IMAGEN DEL PRODUCTO</span></div>}</div>;
}
