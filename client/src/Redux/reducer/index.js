import { 
    GET_NEWS,
    GET_NEWS_BY_ID
 } from "../actions/actionTypes";


const initialState = { 
    news : [],
    detail: [],
 }


export default function rootReducer(state = initialState, {type, payload}) {
    switch (type) {
        case GET_NEWS:
          return {
            ...state,
            news: payload
        }
        case GET_NEWS_BY_ID:
            return {
                ...state,
                detail: payload
            }
        
        default:
            return state;
    }
}