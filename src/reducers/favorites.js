import {
    FAVORITES_RESPONSE,
    FAVORITES_ADD_RESPONSE,
    FAVORITES_DELETE_RESPONSE
} from '../actions/favorites';


export function searchInFavorites(cityId, favoritesList) {
    return favoritesList.findIndex(c => c.id == cityId) >= 0;
}

export default function favorites(state=[], action) {
    switch(action.type) {
        case FAVORITES_RESPONSE:
        case FAVORITES_ADD_RESPONSE:
        case FAVORITES_DELETE_RESPONSE:
            return action.payload;

        default:
            return state;
    }
}
