export const WEATHER_FORECAST_REQUEST = 'WEATHER_FORECAST_REQUEST';
export const WEATHER_FORECAST_RESPONSE = 'WEATHER_FORECAST_RESPONSE';

export const WEATHER_NOW_REQUEST = 'WEATHER_NOW_REQUEST';
export const WEATHER_NOW_RESPONSE = 'WEATHER_NOW_RESPONSE';
export const GEOLOCATION_FAIL = 'GEOLOCATION_FAIL';


import api from '../store/api';


function nowRequest(data) {
    return {
        type: WEATHER_NOW_REQUEST,
        payload: data
    };
}

function nowResponse(data) {
    return {
        type: WEATHER_NOW_RESPONSE,
        payload: data
    };
}

export function getNow(data, type) {
    return function(dispatch) {
        dispatch(nowRequest(data));

        api.now(data, type).then(response => {
            dispatch(nowResponse(response));
        });
    }
}


function forecastRequest() {
    return {
        type: WEATHER_FORECAST_REQUEST
    };
}

function forecastResponse(data) {
    return {
        type: WEATHER_FORECAST_RESPONSE,
        payload: data
    };
}

export function getForecast(cityId) {
    return function(dispatch) {
        dispatch(forecastRequest());

        api.forecast5(cityId).then(response => {
            dispatch(forecastResponse(response));
        });
    };
}
