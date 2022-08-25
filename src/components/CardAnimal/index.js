import "./style.scss";

import face from "../../assets/pictures/face-a-face.jpg";
import globe from "../../assets/icone/monde.png";
import biome from "../../assets/icone/savane.png";
import plate from "../../assets/icone/en-mangeant.png";

// les dependances
import PropTypesLib from "prop-types";

//Les actions

function CardAnimal({ name, taxonomy, locations, characteristics }) {
  return (
    <article className="card-animal">
      <div className="selection-up">
        <span className="animal-name">{name}</span>
        <span className="animal-sort">{taxonomy.order}</span>
        <span className="animal-underSort">{taxonomy.family}</span>
      </div>
      <div className="selection-down">
        <img className="img1" src={face} alt="animal picture" />
        <div className="selection-down__right">
          <div className="contenaire-info">
            <img className="icone_world icone" src={biome} alt="word_icone" />
            <span className="info-name">{characteristics.habitat}</span>
          </div>
          <div className="contenaire-info">
            <img className="icone_world icone" src={globe} alt="world icone" />
            <span className="info-name">{locations[0,1]}</span>
          </div>
          <div className="contenaire-info">
            <img className="icone_world icone" src={plate} alt="word icone" />
            <span className="info-name">{characteristics.diet}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

CardAnimal.prototype = {
  name: PropTypesLib.string.isRequired,
  taxonomy: PropTypesLib.object.isRequired,
  locations: PropTypesLib.object.isRequired,
  characteristics: PropTypesLib.object.isRequired,
};

export default CardAnimal;
