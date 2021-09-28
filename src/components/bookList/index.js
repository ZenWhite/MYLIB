import React from "react";

import Book from "../book";

const BookList = ({ bookList = [] }) => {
  return bookList.map((book) => {
    return <Book book={book} key={book.id} />;
  });
};

export default BookList;
