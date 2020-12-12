//Redux
import { combineReducers } from 'redux';

//Reducers
import filterReducer from './filter';
import sortReducer from './sort';

const rootReducer = combineReducers({
    filter: filterReducer,
    sort: sortReducer
});

export default rootReducer;
