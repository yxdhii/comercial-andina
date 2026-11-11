import React,{useEffect,useRef,useState} from 'react';
import {Wifi,BatteryFull,Signal} from 'lucide-react';
import BottomNav from './components/BottomNav';
import Inicio from './pages/Inicio';
import Catalogo from './pages/Catalogo';
import Carrito from './pages/Carrito';
import Perfil from './pages/Perfil';
import Checkout from './pages/Checkout';
import {useAccessibility} from './context/AccessibilityContext';
const valid=['inicio','catalogo','carrito','perfil'];
export default function App(){
 const [page,setPage]=useState(()=>valid.includes(location.hash.slice(1))?location.hash.slice(1):'inicio');const [search,setSearch]=useState('');const [category,setCategory]=useState('Todos');const [toast,setToast]=useState('');const timer=useRef();const heading=useRef();const {vibrate}=useAccessibility();
 const notify=message=>{setToast(message);clearTimeout(timer.current);timer.current=setTimeout(()=>setToast(''),2600)};
 const navigate=p=>{vibrate();setPage(p);history.replaceState(null,'','#'+p);window.scrollTo({top:0,behavior:'instant'});setTimeout(()=>heading.current?.focus(),0)};
 useEffect(()=>()=>clearTimeout(timer.current),[]);
 return <><a href="#main" className="skip-link">Saltar al contenido</a><div className="device"><div className="ios-status" aria-hidden="true"><span>9:41</span><span className="dynamic-island"/><div><Signal size={13} fill="currentColor"/><Wifi size={14}/><BatteryFull size={17} fill="currentColor"/></div></div><main id="main" className={'app-main '+(page==='carrito'?'has-checkout':'')} tabIndex={-1} ref={heading}>{page==='inicio'&&<Inicio onNavigate={navigate} notify={notify} setSearch={setSearch} setCategory={setCategory}/ >}{page==='catalogo'&&<Catalogo search={search} setSearch={setSearch} category={category} setCategory={setCategory} notify={notify}/ >}{page==='carrito'&&<Carrito onNavigate={navigate} notify={notify}/ >}{page==='perfil'&&<Perfil notify={notify}/ >}{page==='checkout'&&<Checkout onNavigate={navigate} notify={notify}/>}</main>{page!=='checkout'&&<BottomNav page={page} onNavigate={navigate}/>}<div className="home-indicator" aria-hidden="true"/><div className={'toast '+(toast?'visible':'')} role="status" aria-live="polite">{toast}</div></div></>;
}
