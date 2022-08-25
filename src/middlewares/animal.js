import axios from 'axios';

//les actions
import { FETCH_ALL_ANIMAL, saveAnimal, FETCH_NORISS, saveNoriss } from '../action/animal';
// On branche le middleware au store

const animalMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL_ANIMAL: {
      const name = 'bird';
      axios.get('https://api.api-ninjas.com/v1/animals?name=' + name,
      {headers: {
        'X-Api-Key': 'UHOzPdXKEUQIiy7C4sgD8g==2YxoQdxWsumu5GoW'
      }
    },
      )
      .then(
        (Response) => {
          console.log('Response API ->', Response.data);
          store.dispatch(saveAnimal(Response.data));
        },
      )
      .catch(
        (error) => {
          console.log(error);
        },
      );
      return next(action);
    }
    // provisoire
    case FETCH_NORISS: {
      axios.get('https://api.chucknorris.io/jokes/random')
        .then(
          (response) => {
            // Ici on recup bien les données de notre API (les recettes)
            // On veut maintenant les rajouter dans le state
            // Pour ça on va dispatcher une action (l'intention de mémoriser les recettes)
            // store.dispatch(saveDeal(response.data));
            console.log('Response API ->',response.data.value);
            //On envoie le resultat de la requete au reducer qui sera chargé de l'ecriture
            store.dispatch(saveNoriss(response.data));
            console.log('prout');
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );
      return next(action);
    }
    // provisoire
    default:
      return next(action);
  }
};

export default animalMiddleware;
