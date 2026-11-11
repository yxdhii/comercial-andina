import React,{createContext,useContext,useEffect,useState} from 'react';
const Context=createContext(null);
const defaults={dark:false,contrast:false,font:'normal',motion:false,haptics:false};
function load(){try{return {...defaults,...JSON.parse(localStorage.getItem('ca-access-v1')||'{}')}}catch{return defaults}}
export function AccessibilityProvider({children}){
 const [prefs,setPrefs]=useState(load);
 useEffect(()=>{try{localStorage.setItem('ca-access-v1',JSON.stringify(prefs))}catch{};document.documentElement.dataset.theme=prefs.dark?'dark':'light';document.documentElement.dataset.contrast=prefs.contrast?'high':'normal';document.documentElement.dataset.font=prefs.font;document.documentElement.dataset.motion=prefs.motion?'reduce':'normal'},[prefs]);
 const update=(key,value)=>setPrefs(p=>({...p,[key]:value}));
 const vibrate=()=>{if(prefs.haptics&&navigator.vibrate)navigator.vibrate(20)};
 return <Context.Provider value={{prefs,update,vibrate}}>{children}</Context.Provider>;
}
export const useAccessibility=()=>useContext(Context);
