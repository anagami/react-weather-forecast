import { expect } from 'chai';

import { renderComponent } from '../setup';
import { favoritesList, currentCity } from '../mocks';

import FavoritesBar from '../../src/components/FavoritesBar';
import FavoriteCity from '../../src/components/FavoriteCity';

describe('<FavoritesBar /> component', () => {
    let wrapper, defaultProps;

    beforeEach(() => {
        defaultProps = {
            favorites: favoritesList,
            currentCity: currentCity,
            deleteFavorite: () => {},
            selectFavorite: () => {}
        };

        wrapper = renderComponent(FavoritesBar, defaultProps);
    });

    it('Has list of citys', () => {
        expect(wrapper.find('.list-group')).to.have.length(1);
    });

    it('Render all citys', () => {
        expect(wrapper.find(FavoriteCity)).to.have.length( favoritesList.length );
    });

    it('Mark current city', () => {
        expect(wrapper.find(FavoriteCity).at(0).prop('current')).to.be.true;
        expect(wrapper.find(FavoriteCity).at(1).prop('current')).not.be.true;
        expect(wrapper.find(FavoriteCity).at(2).prop('current')).not.be.true;
    });

    it('If favorites list is empty, show message', () => {
        defaultProps.favorites = [];
        wrapper = renderComponent(FavoritesBar, defaultProps);

        expect(wrapper.text()).to.contain('Save your favorites places');
        expect(wrapper.find(FavoriteCity)).to.have.length(0);
    });

});
