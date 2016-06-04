import api from '../store/api';

export const GEOLOCATION_SUPPORT = 'GEOLOCATION_SUPPORT';
export const GEOLOCATION_ENABLED = 'GEOLOCATION_ENABLED';

function supportGeoApi(state) {
    return {
        type: GEOLOCATION_SUPPORT,
        payload: state
    };
}


function enabledGeoApi(state, coords={}) {
    return {
        type: GEOLOCATION_ENABLED,
        payload: {
            state,
            coords
        }
    };
}

export function detectLocation() {
    return function(dispatch) {
        if (navigator && navigator.geolocation) {
            dispatch(supportGeoApi(true));

            return api.getLocation().then(response => {
                    dispatch(enabledGeoApi(true, response));
                }).catch(() => {
                    dispatch(enabledGeoApi(false));
                });
        } else {
            return dispatch(supportGeoApi(false));
        }
    }
}
