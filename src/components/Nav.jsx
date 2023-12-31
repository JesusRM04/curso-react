import { useState } from "react"
import { NavItem } from "./NavItem"
import { Dropdown } from "./Dropdown";
import "./Nav.css";


export function Nav() {
    const [menu, setMenu] = useState(
    [{ nombre: "Incio", icono: "home" },
    { nombre: "Buscar", icono: "search" },
    { nombre: "Explorar", icono: "explore" },
    { nombre: "Reels", icono: "movie" },
    { nombre: "Mensajes", icono: "mail" },
    { nombre: "Notificaciones", icono: "favorite" },
    { nombre: "Crear", icono: "add_box" },
    { nombre: "Perfil", icono: "person" },
    ]);

    return <div className="Nav">
        <h1 className="Nav-Tittle">Proyecto Jesus</h1>

        {menu.map((elemento, i) => <NavItem nombre={elemento.nombre} icono={elemento.icono} key={i}></NavItem>)}
        <Dropdown></Dropdown>
    </div>
    
}
