import "./style.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  
const handleEncyclo = event => {

  event.currentTarget.classList.add('.nav-bar_cat-click');
  event.currentTarget.classList.remove('.nav-bar_cat');
  console.log;
}

  return (
    <div>
      <div className="title_contener">
        <Link to="/">
          <span className="title_main">Anim'O</span>
        </Link>
        <nav className="navbar">
          {/* En dessous placer le toggle                   V*/}
          <Link onClick={handleEncyclo} to="/" className="nav-bar_cat">
            Encyclopedie
          </Link>
          <Link to="/Chaine_Alimentaire" className="nav-bar_cat">
            Chaine alimentaire
          </Link>
          <Link to="/Classification_especes" className="nav-bar_cat">
            Classification des espèces
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
