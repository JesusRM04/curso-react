import { useState } from "react"
import './NavItem.css';
import './Dropdown.css';
import { Icon } from "./Icon";

export function Dropdown(){
    const [open, setOpen]= useState(false)

    return <div className="NavItem Dropdown" onClick={()=>setOpen((open)=>!open)}>
        <Icon icono={'Menu'}></Icon>
        Mas
        {open ? <div className="Nav-Menu">Desplegable</div>: null}
    </div>
}