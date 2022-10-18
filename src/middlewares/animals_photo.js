import axios from "axios";


import { SAVE_ANIMAL_PHOTO } from "../action/animalPhoto";
//! il faut vraiment nommer le site pixel bay et l'auteur de la photo

/*
$.getJSON(URL, function(data){
if (parseInt(data.totalHits) > 0)
    $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
else
    console.log('No hits');
})
*/

// APPEL_API 3- ici on recupere l'action exporté juste au dessus et lui demande de recuperer les datas voulu 

const animal_photoMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_ANIMAL_PHOTO: {
      console.log('L\'image =>');

      const API_KEY = '30678927-12f3c36eb238a20343ea597b1';
      //la route api
      axios.get("https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent,

      //le 'token'
      {headers: {
        'API_KEY': '30678927-12f3c36eb238a20343ea597b1'
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
  }
}

export default animal_photoMiddleware;
