import Provisoire from '../../assets/pictures/face-a-face.jpg';

import "./style.scss";

function Team() {
  return (
  <div>
    <span>Notre super équipe </span>
    <img className="pictureCio" src={ Provisoire } />
    <span>C.I.O</span>
    <p>Son parcours</p>
    <img className="pictureCio" src={ Provisoire } />
    <span>C.I.O</span>
    <p>Son parcours</p>
    <span>Et un remerciment tout particulier a Tony </span>
    {/* Titre
    petite presentation
    Pourquoi ce projet ?
    img chat
      img moi
      img tony
      lien vers linkedin */}
  </div>
  );
}

export default Team;
