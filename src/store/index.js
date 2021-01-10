import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import booksReducer from './reducers/booksReducer';
import libraryReducer from './reducers/libraryReducer';

const rootReducers = combineReducers({
    books: booksReducer,
    library: libraryReducer
});

const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;