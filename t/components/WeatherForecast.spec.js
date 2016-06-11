import { expect } from 'chai';

import { renderComponent } from '../setup';
import { responseForecastCity } from '../mocks';

import WeatherForecast from '../../src/components/WeatherForecast';

describe('<WeatherForecast /> component', () => {
    let wrapper, defaultProps;

    beforeEach(() => {
        defaultProps = {
            weather: responseForecastCity
        };

        wrapper = renderComponent(WeatherForecast, defaultProps);
    });

    it('Has table', () => {
        expect(wrapper.find('table')).to.have.length(1);
    });

    it('Render all record', () => {
        expect(wrapper.find('table tbody tr')).to.have.length( responseForecastCity.list.length );
    });

    it('Render correct data', () => {
        let firstRow = wrapper.find('table tbody tr').first();

        expect(firstRow.find('td').at(0).text()).to.contain('15:00 11/06/2016');
        expect(firstRow.find('td').at(1).text()).to.contain('24.17 - 25.71');
        expect(firstRow.find('td').at(3).text()).to.contain('3.7');
        expect(firstRow.find('td').at(4).text()).to.contain('68');
        expect(firstRow.find('td').at(5).text()).to.contain('997.76');
    });
});
