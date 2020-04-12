import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    console.log("component did catch!");
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      console.log("we got an error! Yikes.");
      return <h1>Oops! We got an error!</h1>;
    }
    console.log("no error! We good and got children!");
    return this.props.children;
  }
}

export default ErrorBoundary;
