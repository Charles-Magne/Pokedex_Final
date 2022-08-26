// == Import
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

//On import les composants dont on a besoin
import Accueil from "../Accueil";

//les actions
import { fetchAllAnimal } from "../../action/animal.js";

// == Composant
function App() {

 
  const dispatch = useDispatch();

  // APPEL_API 1- On initie un dispatch qui va appeler une fonction qui est dans les actions
  useEffect(() => {
    dispatch(fetchAllAnimal());
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
