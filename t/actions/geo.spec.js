import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
    detectLocation,
    GEOLOCATION_SUPPORT,
    GEOLOCATION_ENABLED
} from '../../src/actions/geo';


let middlewares = [ thunk ],
    mockStore = configureMockStore(middlewares);

global.navigator = {
    userAgent: 'node.js',
    geolocation() {
        return {};
    }
};

describe('create actions for geo', () => {
    it('Detect geolocation (GEOLOCATION_SUPPORT, GEOLOCATION_ENABLED)', () => {
        let expectedActions = [
                { type: GEOLOCATION_SUPPORT, payload: true },
                { type: GEOLOCATION_ENABLED, payload: { state: false, coords: {} } }
            ],
            store = mockStore({});

        return store.dispatch(detectLocation()).then(() => {
            expect(store.getActions()).to.eql(expectedActions);
        });
    });
});
