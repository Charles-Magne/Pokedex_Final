import "./style.scss";

//Les composants
import Header from "../Header";
import CardAnimal from "../CardAnimal";

//les icones
import arrowDown from "../../assets/icone/fleche-bas.png";
import random from "../../assets/icone/random.png";


// font alsome
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Accueil() {
  return (
    <div>
      <Header />
      <div className="Pseudo_Body">
        <div className="ad-Left">Pub1</div>
        <div className="page-container">
          <div className="search-and-option-container">
            <div className="search-bar_container">
              <input className="search-bar" placeholder="Search"></input>
            </div>
            <div className="search_filter">
              <div className="search_filter--biome search_option">
                Biome
                <img className="arrow_down" src={arrowDown} alt="arrow_down" />
              </div>
              <div className="search_filter--country search_option">
                Pays
                <img className="arrow_down" src={arrowDown} alt="arrow_down" />
              </div>
              <div className="search_filter--alimentation search_option">
                Omnivore
                <img className="arrow_down" src={arrowDown} alt="arrow_down" />
              </div>
              <button className="ramdowm_button">
              <img className="random_icone" src={random} alt="random_icone" />
                Au hasard</button>
            </div>
          </div>
          <div className="number-results">8 Résultats</div>
          <CardAnimal/>
        </div>
        <div className="ad-droit">Pub2</div>
      </div>
    </div>
  );
}

export default Accueil;
