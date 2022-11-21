// == Import
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

//Les actions
import { fetchAllAnimal } from "../../action/animal.js";

//On import les composants dont on a besoin
import Header from "../Header";
import Accueil from "../Accueil";
import FicheDetail from "../FicheDetail";
import ChaineAlimentaireAccueuil from "../ChaineAlimentaireAccueil";
import Classification from "../Classification";
import Footer from "../Footer";
import Team from "../Team";
import Erreur404 from "../404";

// == Composant
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllAnimal());
  } )

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
