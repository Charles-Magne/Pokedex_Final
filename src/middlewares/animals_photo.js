import axios from "axios";

import { FETCH_ANIMAL_PHOTO, saveAnimalPhoto, saveOnePhoto, FETCH_CARD_IMG, saveCardImg } from "../action/animalPhoto";
import { FETCH_ONE_ANIMAL } from "../action/animal";
import { useSelector } from "react-redux";

// APPEL_API 3- ici on recupere l'action exporté juste au dessus et lui demande de recuperer les datas voulu
//V Provisoire

const animal_photoMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ANIMAL_PHOTO: {
      /************************************************************ */
      //le 'token'
      const API_KEY = "30678927-12f3c36eb238a20343ea597b1";
      const route = "https://pixabay.com/api";
      const recherche = 'mandrill' // store.getState().animal.searchFunction;
      //la route api
      axios
        .get("https://pixabay.com/api/?key="+ API_KEY+"&q="+recherche+"&category=animals,nature&image_type=photo&per_page=3&orientation=horizontal&editors_choice=true")
        .then((Response) => {
          console.log("Response API Photo ->", Response.data);
          store.dispatch(saveAnimalPhoto(Response.data));
        })
        .catch((error) => {
          console.log("les photos =>", error);
        });
      return next(action);
    }

/************************************************************ */
      //La requet d'une photo lorsque l'on clic sur une card
/************************************************************ */

    case FETCH_ONE_ANIMAL: {
      /************************************************************ */
      //le 'token'
      const API_KEY = "30678927-12f3c36eb238a20343ea597b1";
      const route = "https://pixabay.com/api";
      const recherche = action.value;
      console.log('Middelwarephoto =>', action.value);
      //la route api
      axios
        .get("https://pixabay.com/api/?key="+ API_KEY+"&q="+recherche+"&category=animals,nature&image_type=photo&per_page=3&orientation=horizontal&editors_choice=true")
        .then((Response) => {
          console.log("Response API Photo ->", Response.data);
          store.dispatch(saveOnePhoto(Response.data));
        })
        .catch((error) => {
          console.log("les photos =>", error);
        });
      return next(action);
    }


      /************************************************************ */
      //La requet de toutes les photos lors du chargement des cards
/************************************************************ */


case FETCH_CARD_IMG: {
  /************************************************************ */
  //le 'token'
  const API_KEY = "30678927-12f3c36eb238a20343ea597b1";
  const route = "https://pixabay.com/api";
  const recherche = action.value;
  console.log('Middelwarephoto =>', recherche);
  //la route api
  axios
    .get("https://pixabay.com/api/?key="+ API_KEY+"&q="+recherche+"&category=animals,nature&image_type=photo&per_page=3&orientation=horizontal&editors_choice=true")
    .then((Response) => {
      console.log("la reponse data->", Response.data);
      console.log("Le name de la card ->", recherche);
      store.dispatch(saveCardImg(Response.data, recherche));
    })
    .catch((error) => {
      console.log("les photos =>", error);
    });
  return next(action);
}
    

    // V pas touche 
    default: 
    return next(action);
  }
};

export default animal_photoMiddleware;
