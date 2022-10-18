import axios from "axios";

import { FETCH_ANIMAL_PHOTO, saveAnimalPhoto } from "../action/animalPhoto";
//! il faut vraiment nommer le site pixel bay et l'auteur de la photo

// APPEL_API 3- ici on recupere l'action exporté juste au dessus et lui demande de recuperer les datas voulu

const animal_photoMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ANIMAL_PHOTO: {
      /************************************************************ */
      //le 'token'
      const API_KEY = "30678927-12f3c36eb238a20343ea597b1";
      const route = "https://pixabay.com/api";
      const recherche = store.getState().animal.searchFunction;
      //la route api
      axios
        .get("https://pixabay.com/api/?key="+ API_KEY+"&q="+recherche+"&category=animals&image_type=photo&per_page=3")
        .then((Response) => {
          console.log("Response API Photo ->", Response.data);
          store.dispatch(saveAnimalPhoto(Response.data));
        })
        .catch((error) => {
          console.log("les photos =>", error);
        });
      return next(action);
    }
    default: 
    return next(action);
  }
};

export default animal_photoMiddleware;
