import { combineReducers } from 'redux';

const INIT_STATE = {
    favorites: [],
    home: {},
    dashboard: {}

}


const rootReducer = combineReducers({
  state: (state = INIT_STATE) => state
});

export default rootReducer;
