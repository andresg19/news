import {
GET_NEWS,
GET_NEWS_BY_ID,
CLEAR_STATE,
GET_CURIOUS,
} from "../actions/actionTypes";

import axios from 'axios';

export const getNews = () => {
    return async function(dispatch) {
        try {
            let result = await axios.get('http://localhost:3001/news');
            return dispatch({
                type: GET_NEWS,
                payload: result.data.docs
            })
        } catch (error) {
            console.log(error);
        }
    };
};

export const getNewsById = (id) => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`http://localhost:3001/news/${id}`);
            console.log('Aca estoy', result)
            return dispatch({
                type: GET_NEWS_BY_ID,
                payload: result.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getCuriosities = () => {
    return async function(dispatch) {
        try {
            let result = await axios.get('http://localhost:3001/curiosities');
            return dispatch({
                type: GET_CURIOUS,
                payload: result.data.docs
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const clearState = () => {
    console.log("clearState");
    return {
      type: CLEAR_STATE,
    };
  };