import "./style.scss";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div className="title_contener">
        <span className="title_main">Anim'O</span>
        <nav className="navbar">
          <Link to="/" className="nav-bar_cat">Encyclopedie</Link>
          <Link to="/Chaine_Alimentaire" className="nav-bar_cat">Chaine alimentaire</Link>
          <Link to="/Classification_especes" className="nav-bar_cat">Classification des espèces</Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
