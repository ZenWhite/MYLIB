import React from "react";

import ErrorMessage from "../errorMessage";

export default class ErrorBoundary extends React.Component {
  state = { error: false };

  componentDidCatch() {
    this.setState((state) => ({ error: !state.error }));
  }

  render() {
    if (this.state.error) return <ErrorMessage txt="Что-то пошло не так!" />;
    return this.props.children;
  }
}
