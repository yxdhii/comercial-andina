import React,{useEffect,useRef} from 'react';
import {AlertTriangle} from 'lucide-react';
export default function ConfirmDialog({open,title='¿Confirmar acción?',description,onCancel,onConfirm}){
 const ref=useRef(null),cancelRef=useRef(null);
 useEffect(()=>{const d=ref.current;if(open&&!d.open){d.showModal();cancelRef.current?.focus()}else if(!open&&d.open)d.close()},[open]);
 return <dialog ref={ref} className="confirm-dialog" onCancel={e=>{e.preventDefault();onCancel()}} aria-labelledby="dialog-title" aria-describedby="dialog-description"><AlertTriangle size={32} color="#c84d4d"/><h2 id="dialog-title">{title}</h2><p id="dialog-description">{description}</p><div className="dialog-buttons"><button ref={cancelRef} className="btn secondary" onClick={onCancel}>Cancelar</button><button className="btn danger" onClick={onConfirm}>Confirmar</button></div></dialog>;
}
