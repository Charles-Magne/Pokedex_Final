import "./style.scss";

import face from "../../assets/pictures/face-a-face.jpg";
import globe from "../../assets/icone/monde.png";
import biome from "../../assets/icone/savane.png";
import plate from "../../assets/icone/en-mangeant.png";

//Les actions 
import {

} from '../../action/animal';

function CardAnimal() {
  return (
    <article className="card-animal">
            <img className="img1" src={face} alt="animal picture" />
            <div className="selection-1">
              <div className="name-espece-container">
                <span className="animal-name">Aigle</span>
                <span className="animal-sort">Espece</span>
                <span className="animal-underSort">sous-espece</span>
              </div>
              <div className="biome-pays-regime">
                <div className="contenaire-info">
                  <img className="icone_world icone" src={biome} alt="word icone" />
                  <span className="info-name">Biome</span>
                </div>
                <div className="contenaire-info">
                  <img
                    className="icone_world icone"
                    src={globe}
                    alt="world icone"
                  />
                  <span className="info-name">pays</span>
                </div>
                <div className="contenaire-info">
                  <img className="icone_world icone" src={plate} alt="word icone" />
                  <span className="info-name">régime</span>
                </div>
              </div>
            </div>
          </article>
  )
}

export default CardAnimal;
