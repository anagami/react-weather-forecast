import { expect } from 'chai';

import geoReducer from '../../src/reducers/geo';
import {
    GEOLOCATION_SUPPORT,
    GEOLOCATION_ENABLED
} from '../../src/actions/geo';

import { favoritesList, currentCity } from '../mocks';

describe('geoReducer', () => {
    it('update geo support state (GEOLOCATION_SUPPORT)', () => {
        expect( geoReducer(undefined, { type: GEOLOCATION_SUPPORT, payload: true })).to.eql({
            support: true,
            enabled: false,
            coords: {}
        });
    });

    it('update geo data(GEOLOCATION_ENABLED)', () => {
        let geoData = {
            state: true,
            coords: { latitude: 12.345, longitude: 67.890 }
        }, initState = {
            support: true,
            enabled: false,
            coords: {}
        };

        expect( geoReducer(initState, { type: GEOLOCATION_ENABLED, payload: geoData })).to.eql({
            support: true,
            enabled: true,
            coords: geoData.coords
        });
    });
});
