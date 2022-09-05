import axios from 'axios';

//les actions
import { FETCH_ALL_ANIMAL, saveAnimal, VALIDE_VALUE, FETCH_ONE_ANIMAL, saveUrlAnimal } from '../action/animal';
// On branche le middleware au store
// APPEL_API 3- ici on recupere l'action exporté juste au dessus et lui demande de recuperer les datas voulu 
const animalMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL_ANIMAL: {
      const name = 'cat';
      console.log('ce que j\'envoie =>', name);
      //la route api
      axios.get('https://api.api-ninjas.com/v1/animals?name=' + name,
      //le 'token'
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

    //******************* */
    //La recherche via le input
    //******************* */

    case VALIDE_VALUE:{
      //Fait appel au state et utilise l'entrée spéfifié
      const name = store.getState().animal.searchFunction;
      console.log('ce que j\'envoie (middlewarre)=>', name);
      //la route api
      axios.get('https://api.api-ninjas.com/v1/animals?name=' + name,
      //le 'token'
      {headers: {
        'X-Api-Key': 'UHOzPdXKEUQIiy7C4sgD8g==2YxoQdxWsumu5GoW'
      }
    },
      )
      .then(
        (Response) => {
          console.log('Response API pour un seul animal =>', Response.data);
          //attention a la boucle sans fin V
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

    //******************* */
    //Afficher une seul fiche via un clic sur la card ou un url 
    //******************* */

    case FETCH_ONE_ANIMAL: {
      const name = action.value;
      console.log('ce que j\'envoie pour une card =>', name);
      //la route api
      axios.get('https://api.api-ninjas.com/v1/animals?name=' + name,
      //le 'token'
      {headers: {
        'X-Api-Key': 'UHOzPdXKEUQIiy7C4sgD8g==2YxoQdxWsumu5GoW'
      }
    },
      )
      .then(
        (Response) => {
          console.log('Response API pour URL ->', Response.data);
          store.dispatch(saveUrlAnimal(Response.data));
        },
      )
      .catch(
        (error) => {
          console.log(error);
        },
      );
      return next(action);
    }

    // V Cette partie ne bouge pas 
    default:
      return next(action);
  }
};

export default animalMiddleware;
