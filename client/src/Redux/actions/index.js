import {
GET_NEWS
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