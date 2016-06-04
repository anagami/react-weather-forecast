export const GEOLOCATION_SUPPORT = 'GEOLOCATION_SUPPORT';
export const GEOLOCATION_ENABLED = 'GEOLOCATION_ENABLED';


// import api from '../store/api';


function supportGeoApi(state) {
    return {
        type: GEOLOCATION_SUPPORT,
        payload: state
    };
}


function enabledGeoApi(state, coords={}) {
    console.log('enabledGeoApi', coords)
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
        if (navigator.geolocation) {
            dispatch(supportGeoApi(true));

            navigator.geolocation.getCurrentPosition(
                pos => dispatch( enabledGeoApi(true, pos.coords) ),
                () => dispatch( enabledGeoApi(false) )
            );
        } else {
            dispatch(supportGeoApi(false));
        }
    }
}
