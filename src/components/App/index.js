// == Import
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

//On import les composants dont on a besoin
import Header from "../Header";
import Accueil from "../Accueil";
import FicheDetail from "../FicheDetail";
import ChaineAlimentaireAccueuil from "../ChaineAlimentaireAccueil";
import Classification from "../Classification";
import Footer from "../Footer";
import Team from "../Team";
import Erreur404 from "../404";

//les actions
import { fetchAllAnimal } from "../../action/animal.js";
import { fetchAnimalPhoto } from "../../action/animalPhoto.js";



// == Composant
function App() {

 
  const dispatch = useDispatch();

  // APPEL_API 1- On initie un dispatch qui va appeler une fonction qui est dans les actions
  useEffect(() => {
    dispatch(fetchAllAnimal());
    
     // V Provisoire lorsque on charge les infos on envoie une requete a paxabay pour les photos
    dispatch(fetchAnimalPhoto());
  }, []
  );

  //<Route path="/Ici c'est le chemin de la page " element={<Le element correspond au composant />} /
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Animal/:name" element={<FicheDetail />}/>
        <Route path="/Chaine_Alimentaire" element={<ChaineAlimentaireAccueuil/>} />
        <Route path="/Classification_especes" element={<Classification/>}/>
        <Route path="/Team" element={<Team/>}/>
        <Route path="/404" element={<Erreur404/>} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
