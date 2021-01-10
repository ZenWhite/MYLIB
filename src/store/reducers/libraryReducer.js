import {storage} from '../../utils';
import {ADD_TO_LIBRARY, REMOVE_FROM_LIBRARY} from '../types';

const initialState = storage('user-library') || [];

export default function libraryReducer(state = initialState, {type, payload}) {
    let newState = null;
    switch(type) {
        case ADD_TO_LIBRARY:
            newState = [...state, payload];
            storage('user-library', newState);
            return newState; //payload is book-object
        case REMOVE_FROM_LIBRARY:
            newState = state.filter(book => book.id !== payload) //payload is ID from book-object
            storage('user-library', newState);
            return newState;
        default:
            return state;
    }
}