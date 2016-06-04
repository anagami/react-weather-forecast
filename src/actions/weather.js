import api from '../store/api';


export const WEATHER_FORECAST_REQUEST = 'WEATHER_FORECAST_REQUEST';
export const WEATHER_FORECAST_RESPONSE = 'WEATHER_FORECAST_RESPONSE';
export const WEATHER_NOW_REQUEST = 'WEATHER_NOW_REQUEST';
export const WEATHER_NOW_RESPONSE = 'WEATHER_NOW_RESPONSE';


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

        return api.now(data, type).then(response => {
            dispatch(nowResponse(response.data));
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

        return api.forecast5(cityId).then(response => {
            dispatch(forecastResponse(response.data));
        });
    };
}
