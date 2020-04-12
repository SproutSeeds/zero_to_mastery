import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
    console.log("in constructor");
  }

  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/http://jsonplaceholder.typicode.com/users"
    )
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));

    console.log("mounted!");
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
    console.log("on search change");
  };

  render() {
    console.log("in the render");
    // robots and searchField now have this.state attached to it.
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? (
      <h1 className="tc">Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
