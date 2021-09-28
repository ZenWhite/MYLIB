import React from "react";
import { connect } from "react-redux";

import SearchForm from "@components/searchForm";
import BookList from "@components/bookList";
import Loader from "@components/loader";
import ErrorMessage from "@components/errorMessage";
import NotFound from "@components/notFound";

const MainPage = ({ bookList, loading, error, notFound }) => {
  return (
    <section className="search-block">
      <div className="wrap">
        <SearchForm />
        <div className="search-block__devider devider flex">
          <img src="icons/devider.png" alt="devider" draggable="false" />
        </div>
        <div className="search-block__content search-container flex books-container">
          {loading && <Loader />}
          {error && (
            <ErrorMessage txt="В процессе поиска произошла ошибка. Попробуйте позже" />
          )}
          {notFound && <NotFound txt="Ничего не найдено" />}
          <BookList bookList={bookList} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ books }) => {
  return {
    bookList: books.bookList,
    loading: books.loading,
    error: books.error,
    notFound: books.notFound,
  };
};

export default connect(mapStateToProps, null)(MainPage);
