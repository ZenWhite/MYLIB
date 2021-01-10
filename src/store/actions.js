import * as types from './types'
import { bookService } from '../service'

export const fetchBooks = (value) => {
  return async (dispatch) => {
    dispatch({ type: types.FETCH_BOOKS_SUCCESS, payload: [] })
    dispatch({ type: types.FETCH_BOOKS_LOADING })

    bookService
      .getList(value)
      .then((books) => dispatch({ type: types.FETCH_BOOKS_SUCCESS, payload: books.items }))
      .catch((error) => dispatch({ type: types.FETCH_BOOKS_FAILED }))
  }
}

export const addToLibrary = (book) => (dispatch) => dispatch({ type: types.ADD_TO_LIBRARY, payload: book })

export const removeFromLibrary = (id) => (dispatch) => dispatch({ type: types.REMOVE_FROM_LIBRARY, payload: id })
