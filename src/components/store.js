import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import  {persistStore} from 'redux-persist'
import {reducer} from "./reducers";

export const store = createStore( reducer, applyMiddleware(thunk));

export const persist = persistStore(store)



