import { NavLink } from "react-router-dom";
import "./style.scss";


function Footer () {
  return(
    <div>
      <div className="contenerMain" >
      <NavLink to="/Team" >L'équipe</NavLink>
      <NavLink to="/" >Les cookies</NavLink>
      <NavLink to="/" >Conditions generales d'utilisation</NavLink>
      <NavLink to="/" >Mentions légales</NavLink>
      <NavLink to="/" >A propos du site</NavLink>
      </div>
    </div>
  );
}
export default Footer;
