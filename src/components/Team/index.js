import Provisoire from "../../assets/pictures/face-a-face.jpg";

import "./style.scss";

function Team() {
  return (
    <div>
      <span className="titreMain">Notre super équipe </span>
      <div className="theTeam">
        <div className="role">
          <img className="picture" src={Provisoire} />
          <div className="description"  >
            <span className="roleTitre" >Madame Effie Directrice Géneral</span>
            <p>Developpeuse senior Full-stack et amatrice de fromage blanc </p>
          </div>
        </div>
        <div className="role" >
          <img className="picture" src={Provisoire} />
          <div className="description" >
          <span className="roleTitre" >Laurent</span>
          <p>Developpeur front-end junior</p>
          </div>
        </div>

        <span>Et un remerciment tout particulier a Tony </span>
        {/* Titre
    petite presentation
    Pourquoi ce projet ?
    img chat
      img moi
      img tony
      lien vers linkedin */}
      </div>
    </div>
  );
}

export default Team;
