import { WEATHER_NOW_RESPONSE } from '../actions/weather';

export function getCurrentCityData(cityId, weatherData) {
    if ( !cityId || !weatherData) {
        return {};
    } else {
        return weatherData[cityId];
    }
}

export default function currentCity(state={id: null, name: null, country: null}, action) {
    switch(action.type) {
        case WEATHER_NOW_RESPONSE:
            return {
                id: action.payload.id,
                name: action.payload.name,
                country: action.payload.sys.country
            };

        default:
            return state;
    }
}
