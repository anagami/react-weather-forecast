import { expect } from 'chai';
import sinon from 'sinon';

import { renderComponent } from '../setup';

import { App } from '../../src/containers/App';
import SearchBar from '../../src/components/SearchBar';
import FavoritesBar from '../../src/components/FavoritesBar';

describe('<App /> container', () => {
    let wrapper, defaultProps;

    beforeEach(() => {
        defaultProps = {
            favorites: [],
            geo: {},
            currentCity: {},
            detectLocation: sinon.spy(),
            deleteFavorite: () => {},
            getFavoritesList: sinon.spy()
        };

        wrapper = renderComponent(App, defaultProps);
    });

    it('Has search bar', () => {
        expect(wrapper.find(SearchBar)).to.have.length(1);
    });

    it('Has favorites', () => {
        expect(wrapper.find(FavoritesBar)).to.have.length(1);
    });

    it('On start try detect location', () => {
        expect(wrapper.instance().props.detectLocation.calledOnce).to.be.true;
    });

    it('On start get favorites list', () => {
        expect(wrapper.instance().props.getFavoritesList.calledOnce).to.be.true;
    });
});
