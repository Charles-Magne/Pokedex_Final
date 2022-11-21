import "./style.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import titreBlanc  from "../../assets/pictures/Anim'o_blanc_2.png";


// les actions

 const dispatch = useDispatch;


function Header() {
 
  const clicEncyclo = document.querySelector('.nav-bar-encyclo');
  const clicChaine = document.querySelector('.nav-bar-Chaine');
  const clicClassi = document.querySelector('.nav-bar-Classi')

  //On vient recuperer le contenu du state link et en fonction on ajout la classe active au bon link
  const headerLink = useSelector((state) => state.link.activePageHeader);
  
  if (headerLink == 'Encyclo') {
    clicEncyclo.classList.add('nav-bar_cat-click');
    clicChaine.classList.remove('nav-bar_cat-click');
    clicClassi.classList.remove('nav-bar_cat-click');
  }
  else if (headerLink == 'Chaine'){
    clicEncyclo.classList.remove('nav-bar_cat-click');
    clicChaine.classList.add('nav-bar_cat-click');
    clicClassi.classList.remove('nav-bar_cat-click');
  }
  else if (headerLink == 'Classi'){
    clicEncyclo.classList.remove('nav-bar_cat-click');
    clicChaine.classList.remove('nav-bar_cat-click');
    clicClassi.classList.add('nav-bar_cat-click');
  }


  

  return (
    <div>
      <div className="title_contener">
        <Link to="/">
          <img className="titleMain" src={titreBlanc}/>
          <p className="titleComment" >L'encyclopedie pour tout savoir sur les animaux</p>
        </Link>
        <nav className="navbar">
          <Link to="/" className="nav-bar-encyclo nav-bar_cat">
            Encyclopedie
          </Link>
          <Link to="/Chaine_Alimentaire" className="nav-bar-Chaine nav-bar_cat">
            Chaine alimentaire
          </Link>
          <Link to="/Classification_especes" className="nav-bar-Classi nav-bar_cat">
            Classification des espèces
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
