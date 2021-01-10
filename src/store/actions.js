import * as types from './types';
import BookService from '../service';

export const fetchBooks = (value) => {
    return async dispatch => {
        dispatch({type: types.FETCH_BOOKS_SUCCESS, payload: []});
        dispatch({type: types.FETCH_BOOKS_LOADING});

        try {
            BookService.getList(value).then(
                bookList => {
                    dispatch({
                        type: types.FETCH_BOOKS_SUCCESS,
                        payload: bookList.items
                    })
                }
            )
        } catch(err) {
            dispatch({type: types.FETCH_BOOKS_FAILED});
        }

    }
}

export const addToLibrary = (book) => {
    return dispatch => {
        dispatch({type: types.ADD_TO_LIBRARY, payload: book})
    }
}

export const removeFromLibrary = (id) => {
    return dispatch => {
        dispatch({type: types.REMOVE_FROM_LIBRARY, payload: id});
    }
}