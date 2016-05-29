import { combineReducers } from 'redux';


import weatherReducer from './weather';
import currentCityReducer from './currentCity';
import favoritesReducer from './favorites';

const rootReducer = combineReducers({
    weather: weatherReducer,
    currentCity: currentCityReducer,
    favorites: favoritesReducer
});

export default rootReducer;
