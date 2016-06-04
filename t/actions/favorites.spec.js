import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import 'mock-local-storage';

import { getFavoritesList, setFavoritesList, deleteFavorite,
    FAVORITES_REQUEST,
    FAVORITES_RESPONSE,
    FAVORITES_ADD_REQUEST,
    FAVORITES_ADD_RESPONSE,
    FAVORITES_DELETE_REQUEST,
    FAVORITES_DELETE_RESPONSE
} from '../../src/actions/favorites';


let middlewares = [ thunk ],
    mockStore = configureMockStore(middlewares),
    mockCity = {id: 1, name: 'City'};

describe('create actions for favorites', () => {
    afterEach(() => {
        localStorage.clear();
    });

    it('Get all favorites (FAVORITES_REQUEST, FAVORITES_RESPONSE)', () => {
        let expectedActions = [
                { type: FAVORITES_REQUEST },
                { type: FAVORITES_RESPONSE, payload: [] }
            ],
            store = mockStore({});

        return store.dispatch(getFavoritesList()).then(() => {
            expect(store.getActions()).to.eql(expectedActions);
        });
    });

    it('Add to favorites (FAVORITES_ADD_REQUEST, FAVORITES_ADD_RESPONSE)', () => {
        let expectedActions = [
                { type: FAVORITES_ADD_REQUEST },
                { type: FAVORITES_ADD_RESPONSE, payload: [mockCity] }
            ],
            store = mockStore({});

        return store.dispatch(setFavoritesList(mockCity)).then(() => {
            expect(store.getActions()).to.eql(expectedActions);
        });
    });

    it('Remove from favorites (FAVORITES_DELETE_REQUEST, FAVORITES_DELETE_RESPONSE)', () => {
        let expectedActions = [
                { type: FAVORITES_DELETE_REQUEST },
                { type: FAVORITES_DELETE_RESPONSE, payload: [] }
            ],
            store = mockStore({});

        return store.dispatch(deleteFavorite(mockCity)).then(() => {
            expect(store.getActions()).to.eql(expectedActions);
        });
    });
});
