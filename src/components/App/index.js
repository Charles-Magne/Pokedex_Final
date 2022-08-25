// == Import
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

//On import les composants dont on a besoin
import Accueil from "../Accueil";

//les actions
import { fetchAllAnimal, fetchNoriss } from "../../action/animal.js";

// == Composant
function App() {

 
  const dispatch = useDispatch();

  //le use dispatch sert a recuperer une info et a la stocker dans le state
  useEffect(() => {
    dispatch(fetchAllAnimal());
  }, []
  );

 //des que le app se charge on appel l'api de chuch Noriss
  useEffect(
    () => {
      dispatch(fetchNoriss());
    }, []
  );

  //<Route path="/Ici c'est le chemin de la page " element={<Le element correspond au composant />} /
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
