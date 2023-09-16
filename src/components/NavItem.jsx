import "./NavItem.css";
import { Icon } from "./Icon";

export function NavItem(props){
    return <div className="NavItem">
        <Icon icono={props.icono} ></Icon>
        {props.nombre}
    </div>
}