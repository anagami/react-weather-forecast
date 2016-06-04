import { WEATHER_NOW_RESPONSE, WEATHER_FORECAST_RESPONSE } from '../actions/weather'


export default function weather(state={}, action) {
    let newState;

    switch(action.type) {
        case WEATHER_NOW_RESPONSE:
            return {...state, [action.payload.id]: {now: action.payload} };

        case WEATHER_FORECAST_RESPONSE:
            newState = { ...state };

            if ( newState[action.payload.city.id] ) {
                newState[action.payload.city.id].forecast = action.payload;
            } else {
                newState[action.payload.city.id] = {forecast: action.payload};
            }

            return newState;

        default:
            return state
    }
}
