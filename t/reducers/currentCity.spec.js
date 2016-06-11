import { expect } from 'chai';

import currentCityReducer, { getCurrentCityData } from '../../src/reducers/currentCity';
import { WEATHER_NOW_RESPONSE } from '../../src/actions/weather';

import { currentCity, responseNowCity, weatherData } from '../mocks';

describe('currentCityReducer', () => {
    it('Set current city on WEATHER_NOW_RESPONSE', () => {
        let testAction = {
                type: WEATHER_NOW_RESPONSE,
                payload: responseNowCity
            };

        expect( currentCityReducer(undefined, testAction) ).to.eql(currentCity);
    })

    it('Find current city in store', () => {
        let testAction = {
                type: WEATHER_NOW_RESPONSE,
                payload: responseNowCity
            };

        expect( getCurrentCityData(currentCity.id, weatherData) ).to.eql({
            now: responseNowCity
        });
    })
})