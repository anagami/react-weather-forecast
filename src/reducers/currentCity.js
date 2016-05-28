import { WEATHER_NOW_RESPONSE } from '../actions'



export function getCurrentCityData(cityId, weatherData) {
    if ( !cityId || !weatherData) {
        return {};
    } else {
        return weatherData[cityId];
    }
}


export default function currentCity(state=null, action) {
    switch(action.type) {
        case WEATHER_NOW_RESPONSE:
            return action.payload.id;

        default:
            return state;
    }
}
