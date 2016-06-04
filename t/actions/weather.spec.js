import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { getNow, getForecast,
    WEATHER_FORECAST_REQUEST,
    WEATHER_FORECAST_RESPONSE,
    WEATHER_NOW_REQUEST,
    WEATHER_NOW_RESPONSE
} from '../../src/actions/weather';


let middlewares = [ thunk ],
    mockStore = configureMockStore(middlewares);

describe('create actions for weather', () => {
    it('Get current weather (WEATHER_NOW_REQUEST, WEATHER_NOW_RESPONSE)', () => {
        let expectedActions = [
                { type: WEATHER_NOW_REQUEST, payload: 'rome' },
                { type: WEATHER_NOW_RESPONSE }
            ],
            store = mockStore({});

        return store.dispatch(getNow('rome', 'q')).then(() => {
            expect(store.getActions()).to.have.lengthOf(2);
            expect(store.getActions()[0]).to.eql(expectedActions[0]);
            expect(store.getActions()[1].type).to.eql(expectedActions[1].type);
        });
    });

    it('Get forecast weather (WEATHER_FORECAST_REQUEST, WEATHER_FORECAST_RESPONSE)', () => {
        let expectedActions = [
                { type: WEATHER_FORECAST_REQUEST },
                { type: WEATHER_FORECAST_RESPONSE }
            ],
            store = mockStore({});

        return store.dispatch(getForecast('2988507')).then(() => {
            expect(store.getActions()).to.have.lengthOf(2);
            expect(store.getActions()[0]).to.eql(expectedActions[0]);
            expect(store.getActions()[1].type).to.eql(expectedActions[1].type);
        });
    });
});
