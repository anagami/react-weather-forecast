import { expect } from 'chai';

import { renderComponent } from '../setup';
import { responseNowCity } from '../mocks';

import WeatherNow from '../../src/components/WeatherNow';

describe('<WeatherNow /> component', () => {
    let wrapper, defaultProps;

    beforeEach(() => {
        defaultProps = {
            weather: responseNowCity
        };

        wrapper = renderComponent(WeatherNow, defaultProps);
    });

    it('Has list of data', () => {
        expect(wrapper.find('.list-group')).to.have.length(1);
    });

    it('Show time of forecast', () => {
        expect(wrapper.find('h3').text()).to.contain('11:43 11/06/2016');
    });
});
