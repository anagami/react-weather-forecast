import { expect } from 'chai';

import weatherReducer from '../../src/reducers/weather';
import { WEATHER_NOW_RESPONSE, WEATHER_FORECAST_RESPONSE } from '../../src/actions/weather'

import { responseNowCity, responseForecastCity } from '../mocks';

describe('weatherReducer', () => {
    it('update state for weather now (WEATHER_NOW_RESPONSE)', () => {
        expect( weatherReducer(undefined, { type: WEATHER_NOW_RESPONSE, payload: responseNowCity })).to.eql({
            [responseNowCity.id]: {
                now: responseNowCity
            }
        });
    });

    it('update state for weather forecast (WEATHER_FORECAST_RESPONSE)', () => {
        expect( weatherReducer(undefined, { type: WEATHER_FORECAST_RESPONSE, payload: responseForecastCity })).to.eql({
            [responseForecastCity.city.id]: {
                forecast: responseForecastCity
            }
        });
    });
});
