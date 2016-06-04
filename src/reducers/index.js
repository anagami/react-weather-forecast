import { combineReducers } from 'redux';


import weatherReducer from './weather';
import currentCityReducer from './currentCity';
import favoritesReducer from './favorites';
import geoReducer from './geo';

const rootReducer = combineReducers({
    weather: weatherReducer,
    currentCity: currentCityReducer,
    favorites: favoritesReducer,
    geo: geoReducer
});

export default rootReducer;
