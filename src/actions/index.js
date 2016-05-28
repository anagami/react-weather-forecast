
// export const DETECT_LOCATION = 'DETECT_LOCATION'
export const WEATHER_FORECAST_REQUEST = 'WEATHER_FORECAST_REQUEST'
export const WEATHER_FORECAST_RESPONSE = 'WEATHER_FORECAST_RESPONSE'

export const WEATHER_NOW_REQUEST = 'WEATHER_NOW_REQUEST'
export const WEATHER_NOW_RESPONSE = 'WEATHER_NOW_RESPONSE'
export const WEATHER_NOW_FAIL = 'WEATHER_NOW_FAIL'


import api from '../store/api'



function currentLocationRequest(data) {
    return {
        type: WEATHER_NOW_REQUEST,
        payload: data
    }
}

function currentLocationResponse(data) {
    return {
        type: WEATHER_NOW_RESPONSE,
        payload: data
    }
}

function currentLocationFail(data) {
    return {
        type: WEATHER_NOW_FAIL,
        payload: data
    }
}


export function detectLocation() {
    return function(dispatch) {
        // dispatch(weatherRequest())


        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                dispatch(currentLocationRequest(pos));

                api.currentLocation(pos).then(response => {
                    dispatch(currentLocationResponse(response))
                });
            });
        } else {
            dispatch(currentLocationFail());
        }
    }
}



// WEATHER_SEARCH
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
    }
}
