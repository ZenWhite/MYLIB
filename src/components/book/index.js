import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import { addToLibrary, removeFromLibrary } from "../../store/actions";

const Book = ({ book, library, addToLibrary, removeFromLibrary }) => {
  const isFavorite = Boolean(
    library.find((libraryBook) => libraryBook.id === book.id)
  );
  const btnClasses = classNames({
    "book-btn": true,
    flex: true,
    remove: isFavorite,
  });
  const clickHandler = (e) => {
    e.preventDefault();
    if (isFavorite) {
      removeFromLibrary(book.id);
      return;
    }
    addToLibrary(book);
  };

  return (
    <div className="book-component flex" id={`book-${book.id}`}>
      <div className="book-thumb">
        <img src={book.thumb} draggable="false" alt="" />
        <div
          style={{ background: `url("${book.thumb}")` }}
          className="book-overlay"
        ></div>
      </div>
      <div className="book-info flex">
        <h2 className="book-name">{book.title}</h2>
        <p className="book-author">{book.authors}</p>
        <p className="book-description">{book.description}</p>
        <div className="search-block__container flex">
          <a
            href={book.link}
            target="_blank"
            rel="noreferrer"
            className="search-block__link book-read-link"
          >
            <span>Ознакомиться</span>
            <div className="search-block__border border-1"></div>
            <div className="search-block__border border-2"></div>
          </a>
          <button onClick={clickHandler} className={btnClasses}>
            <img src="icons/add.svg" alt="" draggable="false" />
            <img src="icons/remove.svg" alt="" draggable="false" />
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ library }) => {
  return { library };
};

const mapDispatchToProps = {
  addToLibrary,
  removeFromLibrary,
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
