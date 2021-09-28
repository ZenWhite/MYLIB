import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../header";
import MainPage from "../../pages/main";
import Library from "../../pages/library";
import store from "../../store";
import ErrorBoundary from "../errorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <Header />
          <main className="main">
            <Switch>
              <Route path="/" component={MainPage} exact />
              <Route path="/library" component={Library} />
            </Switch>
          </main>
        </Router>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
