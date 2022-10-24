import "./style.scss";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { titreBlanc } from "../../assets/pictures/Titre.png";


// les actions


 const dispatch = useDispatch;


function Header() {
  // On veut extraire la location de l'url et s'en servir pour declancher les changement d'onglet
//const location = useLocation;

  //console.log('la route',location);

  const clicEncyclo = document.querySelector('.nav-bar-encyclo');
  const clicChaine = document.querySelector('.nav-bar-Chaine');
  const clicClassi = document.querySelector('.nav-bar-Classi')

const handleEncyclo = event => {
  //On active la page
  clicEncyclo.classList.add('nav-bar_cat-click');
  clicEncyclo.classList.remove('nav-bar_cat');
// On desactive
  clicChaine.classList.remove('nav-bar_cat-click');
  clicChaine.classList.add('nav-bar_cat');

  clicClassi.classList.remove('nav-bar_cat-click');
  clicClassi.classList.add('nav-bar_cat');

  document.location.href = "/";
  console.log('ca clique');
}

const handleChaine = event => {
   //On active la page
  clicChaine.classList.add('nav-bar_cat-click');
  clicChaine.classList.remove('nav-bar_cat');

// On desactive
  clicEncyclo.classList.remove('nav-bar_cat-click');
  clicEncyclo.classList.add('nav-bar_cat');

  clicClassi.classList.remove('nav-bar_cat-click');
  clicClassi.classList.add('nav-bar_cat');

console.log('coucou');
}

const handleClassi = event => {

  clicClassi.classList.add('nav-bar_cat-click');
  clicClassi.classList.remove('nav-bar_cat');

  // On desactive
  clicEncyclo.classList.remove('nav-bar_cat-click');
  clicEncyclo.classList.add('nav-bar_cat');

  clicChaine.classList.remove('nav-bar_cat-click');
  clicChaine.classList.add('nav-bar_cat');
}



  return (
    <div>
      <div className="title_contener">
        <Link to="/">
          <img>{ titreBlanc }</img>
          <span className="title_main">Animal</span>
        </Link>
        <nav className="navbar">
          {/* En dessous placer le toggle                   V*/}
          <Link onClick={handleEncyclo} to="/" className="nav-bar_cat-click nav-bar-encyclo">
            Encyclopedie
          </Link>
          <Link onClick={handleChaine} to="/Chaine_Alimentaire" className="nav-bar-Chaine nav-bar_cat">
            Chaine alimentaire
          </Link>
          <Link onClick={handleClassi} to="/Classification_especes" className="nav-bar_cat nav-bar-Classi">
            Classification des espèces
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
