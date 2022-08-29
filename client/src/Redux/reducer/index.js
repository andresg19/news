import { 
    GET_NEWS
 } from "../actions/actionTypes";


const initialState = { 
    news : []
 }


export default function rootReducer(state = initialState, {type, payload}) {
    switch (type) {
        case GET_NEWS:
          return {
            ...state,
            news: payload
        }
        
        default:
            return state;
    }
}