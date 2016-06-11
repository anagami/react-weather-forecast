import { expect } from 'chai';

import favoritesReducer, { searchInFavorites } from '../../src/reducers/favorites';
import {
    FAVORITES_RESPONSE,
    FAVORITES_ADD_RESPONSE,
    FAVORITES_DELETE_RESPONSE
} from '../../src/actions/favorites';
import { favoritesList, currentCity } from '../mocks';

describe('favoritesReducer', () => {
    it('return updated list (FAVORITES_RESPONSE, FAVORITES_ADD_RESPONSE, FAVORITES_DELETE_RESPONSE)', () => {
        expect( favoritesReducer(undefined, { type: FAVORITES_RESPONSE, payload: favoritesList })).to.eql(favoritesList);
        expect( favoritesReducer(undefined, { type: FAVORITES_ADD_RESPONSE, payload: favoritesList })).to.eql(favoritesList);
        expect( favoritesReducer(undefined, { type: FAVORITES_DELETE_RESPONSE, payload: favoritesList })).to.eql(favoritesList);
    });

    it('return true if current city in favorite', () =>{
        expect( searchInFavorites(currentCity.id, favoritesList) ).to.be.true;
    });

    it('return false if current city in not favorite', () =>{
        expect( searchInFavorites(999999999, favoritesList) ).not.be.true;
    })
});
