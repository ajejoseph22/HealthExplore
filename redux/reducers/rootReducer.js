//Modules
import { combineReducers } from 'redux';

//Reducers
import filterReducer from './filter';

const rootReducer = combineReducers({
    filter: filterReducer,
});

export default rootReducer;
