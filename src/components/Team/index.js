import photo from "../../assets/pictures/dev_2.png";
import theBoss from "../../assets/pictures/boss.jpg";
import "./style.scss";

function Team() {
  return (
    <div>
      <span className="titreMain">Notre super équipe </span>
      <div className="theTeam">
        <div className="role">
          <img className="picture" src={theBoss } />
          <div className="description"  >
            <span className="roleTitre" >Madame Effie | Directrice Géneral</span>
            <p>Developpeuse senior Full-stack et amatrice de fromage blanc </p>
          </div>
        </div>
        <div className="role" >
          <img className="picture" src={photo} />
          <div className="description" >
          <span className="roleTitre" >Laurent</span>
          <p className="roleDescription" >Developpeur front-end junior</p>
          </div>
        </div>
      </div>
      <p className="Tony" >Et un remerciement tout particulier à Tony </p>
    </div>
  );
}

export default Team;
