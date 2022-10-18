import axios from "axios";

import { SAVE_ANIMAL_PHOTO } from "../action/animalPhoto";
//! il faut vraiment nommer le site pixel bay et l'auteur de la photo

// APPEL_API 3- ici on recupere l'action exporté juste au dessus et lui demande de recuperer les datas voulu

const animal_photoMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_ANIMAL_PHOTO: {
      /************************************************************ */
      console.log("L'image =>");

      //le 'token'
      const API_KEY = "30678927-12f3c36eb238a20343ea597b1";
      const route = "https://pixabay.com/api";
      const recherche = "cat";
      //la route api
      axios
        .get("https://pixabay.com/api/?key="+ API_KEY+"&q=dog&category=animals&image_type=photo")
        .then((Response) => {
          console.log("Response API Photo ->", Response.data);
          //store.dispatch(saveAnimal(Response.data));
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
