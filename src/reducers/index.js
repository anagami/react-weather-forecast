import { combineReducers } from 'redux';


import weatherReducer from './weather'
import currentCityReducer from './currentCity'

const rootReducer = combineReducers({
    weather: weatherReducer,
    currentCity: currentCityReducer
});

export default rootReducer
