import {
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_LOADING,
    FETCH_BOOKS_FAILED
} from '../types';

import {getBook} from '../../utils';

const initialState = {
    bookList: [],
    loading: false,
    error: false,
    notFound: false
}

export default function booksReducer(state = initialState, {type, payload}) {
    switch (type) {
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                bookList: payload ? payload.map( book => getBook(book) ) : [],
                loading: false,
                notFound: !Boolean(payload)
            }
        case FETCH_BOOKS_LOADING :
            return {
                ...state,
                loading: true,
            }
        case FETCH_BOOKS_FAILED:
            return {
                ...initialState,
                error: true,
            }
        default:
            return state;
    }
}