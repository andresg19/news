import { 
    GET_NEWS,
    GET_NEWS_BY_ID,
    CLEAR_STATE,
    GET_CURIOUS
 } from "../actions/actionTypes";


const initialState = { 
    news : [],
    detail: [],
    curiosities: [],
 }


export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_NEWS:
      return {
        ...state,
        news: payload,
      };
    case GET_NEWS_BY_ID:
      return {
        ...state,
        detail: payload,
      };
    case CLEAR_STATE:
      return {
        ...state,
        detail: [],
      };
    case GET_CURIOUS:
      return {
        ...state,
        curiosities: payload,
      }

    default:
      return state;
  }
}