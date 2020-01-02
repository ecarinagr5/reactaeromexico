import { createStore, combineReducers } from 'redux';
//Reducers
import results from './reducers/results';
import allairports from './reducers/allairports';


const reducer = combineReducers({
      results, 
      allairports
});

const store = createStore( reducer );

export default store;