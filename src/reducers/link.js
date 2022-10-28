
import { CLICK_HEADER_CHAINE, CLICK_HEADER_CLASSI, CLICK_HEADER_ENCYCLO } from '../action/link';


export const initialState = {
  activePageHeader: "",
};

function linkReducer (state = initialState, action = {}) {
  switch (action.type) {
    case CLICK_HEADER_ENCYCLO:
      return {
        ...state,
        activePageHeader: action.Encyclo,
      };

      case CLICK_HEADER_CLASSI:
      return {
        ...state,
        activePageHeader: action.Classi,
      };

      case CLICK_HEADER_CHAINE:  
        return {
          ...state,
          activePageHeader: action.Chaine,
        };


      //rien ne change en dessous
    default:
      return state;
  }

}

export default linkReducer;
