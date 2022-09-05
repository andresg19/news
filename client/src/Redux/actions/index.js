import {
GET_NEWS,
GET_NEWS_BY_ID,
CLEAR_STATE,
GET_CURIOUS,
GET_CURIOUS_BY_ID,
LOGIN_USER,
GET_USERS,
USER_LOGGED,
IS_LOGGED,
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

export const getCuriositiesById = (id) => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`http://localhost:3001/curiosities/${id}`);
            console.log(result)
            return dispatch({
                type: GET_CURIOUS_BY_ID,
                payload: result.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const registerUser = (payload) => {
    return async function() {
        let data = axios.post('http://localhost:3001/users/insert', payload);
        return { 
            data
        };
    }
}

export const findUserLog = (payload) => {
    return async function(dispatch) {
        try {
            let result = await axios.post('http://localhost:3001/users/log', payload);
            console.log('result', result.data.docs)
            return dispatch({
                type: LOGIN_USER,
                payload: result.data.docs
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getUsers = () => {
    return async function(dispatch) {
        try {
            let result = await axios.get('http://localhost:3001/users');
            return dispatch({
                type: GET_USERS,
                payload: result.data.docs
            })
        } catch (error) {
            console.log(error);
        }
    };
};

export const isLogged = (payload, body) => {
    return async function (dispatch) {
        console.log('entre')
        try {
            let result = await axios.put(`http://localhost:3001/users/${payload}`, body );
            console.log('action', result)
            return dispatch({
                type: IS_LOGGED,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const userLogged = (payload) => {
    return async function (dispatch) {
        return dispatch({
            type: USER_LOGGED,
            payload
        })
    }
}

export const addOneNews = (payload) => {
    return async function() {
        let data = axios.post('http://localhost:3001/news/insert', payload);
        return { 
            data
        };
    }
}

export const clearState = () => {
    console.log("clearState");
    return {
      type: CLEAR_STATE,
    };
  };