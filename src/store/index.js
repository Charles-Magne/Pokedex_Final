import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';

// On donne acces au middlewares 
import animalMiddleware from '../middlewares/animal';
import animal_photoMiddleware from '../middlewares/animals_photo';

// permet d'utiliser les react dev tool sur le localhost
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//! COMMENTAIRE pour comprendre a quoi sert le applymiddleware et son parent? le composeenhancers console.log(applyMiddleware);


// trad. exhausteurs => permet d'englober le applyMiddleware qui lui meme engloble tout les middlewares
const enhancers = composeEnhancers(
  // applyMiddleware permet de "combiner" les deux middlewares (les mettre dans un paquet)
  applyMiddleware( animalMiddleware, animal_photoMiddleware ),
);
const store = createStore(reducer, enhancers);

export default store;
