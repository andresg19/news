import { 
    GET_NEWS,
    GET_NEWS_BY_ID,
    CLEAR_STATE,
    GET_CURIOUS,
    GET_CURIOUS_BY_ID,
    LOGIN_USER,
    GET_USERS,
    USER_LOGGED,
 } from "../actions/actionTypes";


const initialState = { 
    news : [],
    detail: [],
    curiosities: [],
    detailCurious: [],
    users: [],
    userLogged: JSON.parse(localStorage.getItem("actualUser"))
    ? JSON.parse(localStorage.getItem("actualUser"))
    : [],
 }


export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_NEWS:
      return {
        ...state,
        news: payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: payload,
      }
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
    case GET_CURIOUS_BY_ID:
      return {
        ...state,
        detailCurious: payload,

      }
    case USER_LOGGED:
      console.log('payload', payload)
      localStorage.setItem('actualUser', JSON.stringify(payload))
      return {
        ...state,
      }

    default:
      return state;
  }
}