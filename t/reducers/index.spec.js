import { expect } from 'chai';

import rootReducer from '../../src/reducers';

describe('rootReducer', () => {
    it('Correct initial store state', () => {
        expect(rootReducer(undefined, {})).to.eql({
            currentCity: {
                id: null,
                name: null,
                country: null
            },
            favorites: [],
            geo: {
                coords: {},
                enabled: false,
                support: false
            },
            weather: {}
        });
    });
});
