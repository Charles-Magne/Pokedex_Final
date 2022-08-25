import "./style.scss";

function header() {
  return (
    <div>
      <div className="title_contener">
        <span className="title_main">Anim'O</span>
        <nav className="navbar">
          <div className="nav-bar_cat">Encyclopedie</div>
          <div className="nav-bar_cat">Chaine alimentaire</div>
          <div className="nav-bar_cat">Tableau des espèces</div>
        </nav>
      </div>
    </div>
  );
}

export default header;
