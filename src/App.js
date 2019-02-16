import React, { Component } from "react";
import SearchForm from "./components/SearchForm";
import { Route } from "react-router-dom";
import ResultsPage from "./components/ResultsPage";
import ErrorPage from "./components/ErrorPage";

class App extends Component {
  state = {
    category: "",
    searchTerm: ""
  };

  handleUserSearchTerm = (cat, search) => {
    this.setState({ category: cat, searchTerm: search });
  };

  render() {
    return (
      <div>
        <header>
          <h1>Star Wars Search</h1>
        </header>
        <Route
          exact
          path="/"
          render={rProps => {
            return (
              <SearchForm
                {...rProps}
                handleUserSearchTerm={this.handleUserSearchTerm}
              />
            );
          }}
        />

        <Route
          path="/results"
          render={rProps => {
            return (
              <ResultsPage
                {...rProps}
                category={this.state.category}
                searchTerm={this.state.searchTerm}
              />
            );
          }}
        />
         <Route
          path="/error"
          render={rProps => {
            return (
              <ErrorPage
                {...rProps}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default App;
