import { expect } from 'chai';
import sinon from 'sinon';

import { renderComponent } from '../setup';
import { Dashboard } from '../../src/containers/Dashboard';
import { responseNowCity, responseForecastCity, currentCity } from '../mocks';

describe('<Dashboard /> container', () => {
    let wrapper, defaultProps;

    beforeEach(() => {
        defaultProps = {
            now: responseNowCity,
            forecast: responseForecastCity,
            currentCity: currentCity,
            isFavorite: true,
            geo: {support: false, enabled: false, coords: {}},
            getForecast: () => {},
            setFavoritesList: () => {},
            deleteFavorite: sinon.spy()
        };

        wrapper = renderComponent(Dashboard, defaultProps);
    });

    it('Show city and country', () => {
        expect(wrapper.find('.lead').text()).to.contain('Paris(FR)');
    });

    it('Defaut tab "Now"', () => {
        expect(wrapper.state('tab')).to.be.equal('now');
        expect(wrapper.find('.nav-link').at(0).hasClass('active')).to.be.true;
    });

    it('On switch tabs, fires correct handler', () => {
        wrapper.find('.nav-link').at(1).simulate('click');

        expect(wrapper.state('tab')).to.be.equal('forecast');
        expect(wrapper.find('.nav-link').at(0).hasClass('active')).not.be.true;
        expect(wrapper.find('.nav-link').at(1).hasClass('active')).to.be.true;
    });

    it('If current city in favorite, show remove button', () => {
        expect(wrapper.find('.lead .btn-danger')).to.have.length(1);
        expect(wrapper.find('.lead .btn-danger').text()).to.contain('Remove from favorites');
    });

    it('On click "Remove from favorites", fires correct handler', () => {
        wrapper.find('.lead .btn-danger').simulate('click', { preventDefault: sinon.spy() });

        expect(wrapper.instance().props.deleteFavorite.withArgs(currentCity).calledOnce).to.be.true;
    });
});
