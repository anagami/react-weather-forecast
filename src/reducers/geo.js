import {
    GEOLOCATION_SUPPORT,
    GEOLOCATION_ENABLED
} from '../actions/geo';

export default function geo(state={support: false, enabled: false, coords: {}}, action) {
    switch(action.type) {
        case GEOLOCATION_SUPPORT:
            return {
                ...state,
                support: action.payload
            };

        case GEOLOCATION_ENABLED:
            console.log(action)
            return {
                ...state,
                enabled: action.payload.state,
                coords: action.payload.coords
            };

        default:
            return state;
    }
}
