import "./style.scss";

//Les modules de depandances
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

//Les composants
import Header from "../Header";
import CardAnimal from "../CardAnimal";

//les icones
import arrowDown from "../../assets/icone/fleche-bas.png";
import random from "../../assets/icone/random.png";
import look from "../../assets/icone/search.png";

//Les actions
import { saveSearch, sendSearch } from "../../action/animal";


// font alsome
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

//---------------------La fonction--------------------------------
function Accueil() {
  //---------------------les actions--------------------------------

  //Importation des datas au chargement
  const dispatch = useDispatch();
  const { nameUrl } = useParams();

  // Ici on import le sous-state list (l'api) pour l'utiliser dans les cards
  const list = useSelector((state) => state.animal.list);


  //Envoie de l'input au state
  const changeValue = (event) => {
    dispatch(saveSearch(event.currentTarget.value, "searchValue"));
  };

  //submit du search pour nouvelle requete api
  const valideValue = (event) => {
    event.preventDefault();
    dispatch(sendSearch(event));
  };

  // Ici on import le state dans la barre de recherche
  const searchValue = useSelector((state) => state.searchFunction);


  // ---------------------le composant--------------------------------
  return (
    <div>
      <Header />
      <div className="Pseudo_Body">
        <div className="ad-Left">Pub1</div>
        <div className="page-container">
          <div className="search-and-option-container">
            <div className="search-bar_container">
              <form
                className="from-search"
                type="submit"
                onSubmit={valideValue}
              >
                <input
                  type="text"
                  onChange={changeValue}
                  value={searchValue}
                  className="search-bar"
                  placeholder="Search"
                ></input>
              </form>
              <button
                onClick={valideValue}
                className="search-button"
                type="button"
              >
                <img className="search-icone" src={look} />
              </button>
            </div>
            <div className="search_filter">
              <select
                className="search_filter--biome search_option arrow_down"
                label="ckeck"
                src={arrowDown}
                alt="arrow_down"
              >
                <option selected>Biome---(tous)</option>
                <option>Aride</option>
                <option>Forêt</option>
              </select>

              <select
                className="search_filter--country search_option arrow_down"
                src={arrowDown}
                alt="arrow_down"
              >
                <option>Pays---(tous)</option>
                <option>France</option>
                <option>Angleterre</option>
                <option>Etat-unis</option>
              </select>

              <select
                className="search_filter--alimentation search_option arrow_down"
                src={arrowDown}
                alt="arrow_down"
              >
                <option>Regime alimentaire---(tous)</option>
                <option>Ommnivore</option>
                <option>Carnivore</option>
                <option>Herbivore</option>
              </select>

              <button className="ramdowm_button">
                <img className="random_icone" src={random} alt="random_icone" />
                Au hasard
              </button>
            </div>
          </div>
          <div className="number-results">{list.length} Résultats</div>
          <div className="Card_wraper">
            {list.map((list) => (
              <CardAnimal key={list.name} {...list} />
            ))}
            {/*ici on vas rentrer la card animal en fonction du stat */}
            {/* V permet de voir toutes les clees possible pour identifier les ressources
            //!on peut mettre du css dans un console.log
              console.log('Test =>',Object.keys(list))      */}
            
            {/*ici on vas rentrer la card animal en fonction du stat */}
          </div>
        </div>
        <div className="ad-droit">Pub2</div>
      </div>
    </div>
  );
}


export default Accueil;
