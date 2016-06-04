export const FAVORITES_REQUEST = 'FAVORITES_REQUEST';
export const FAVORITES_RESPONSE = 'FAVORITES_RESPONSE';
export const FAVORITES_ADD_REQUEST = 'FAVORITES_ADD_REQUEST';
export const FAVORITES_ADD_RESPONSE = 'FAVORITES_ADD_RESPONSE';
export const FAVORITES_DELETE_REQUEST = 'FAVORITES_DELETE_REQUEST';
export const FAVORITES_DELETE_RESPONSE = 'FAVORITES_DELETE_RESPONSE';

import api from '../store/api';


function favoritesRequest() {
    return {
        type: FAVORITES_REQUEST
    };
}

function favoritesResponse(data) {
    return {
        type: FAVORITES_RESPONSE,
        payload: data
    };
}

export function getFavoritesList() {
    return function(dispatch) {
        dispatch(favoritesRequest());

        api.getFavorites().then(response => {
            dispatch(favoritesResponse(response));
        });
    };
}

function addFavoritesRequest() {
    return {
        type: FAVORITES_ADD_REQUEST
    };
}

function addFavoritesResponse(data) {
    return {
        type: FAVORITES_ADD_RESPONSE,
        payload: data
    };
}

export function setFavoritesList(city) {
    return function(dispatch) {
        dispatch(addFavoritesRequest());

        api.setFavorites(city).then(response => {
            dispatch(addFavoritesResponse(response));
        });
    };
}


function deleteFavoritesRequest() {
    return {
        type: FAVORITES_DELETE_REQUEST
    };
}

function deleteFavoritesResponse(data) {
    return {
        type: FAVORITES_DELETE_RESPONSE,
        payload: data
    };
}

export function deleteFavorite(city) {
    return function(dispatch) {
        dispatch(deleteFavoritesRequest());

        api.deleteFavorites(city).then(response => {
            dispatch(deleteFavoritesResponse(response));
        });
    };
}
