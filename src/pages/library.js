import React from "react";
import { connect } from "react-redux";

import BookList from "@components/bookList";
import NotFound from "@components/notFound";

const Library = ({ library }) => {
  return (
    <section className="user-library">
      <div className="wrap">
        <h1 className="title">Моя библиотека</h1>
        <div className="user-library__devider devider flex">
          <img src="icons/devider.png" alt="devider" draggable="false" />
        </div>
        <div className="user-library__content lib-container flex books-container">
          {!library.length && <NotFound txt="В вашей библиотеке ничего нет" />}
          <BookList bookList={library} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ library }) => {
  return { library };
};

export default connect(mapStateToProps, null)(Library);
