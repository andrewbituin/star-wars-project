import React from "react";

export default class Results extends React.Component {
    state = {
        results: []
    }
    searchResults = () =>
    this.props.results.map(result => {
        return (
          <li key={result.created}>
            <h3>{result.name}</h3>
            {result["orbital_period"] ? (
              <p>Orbital period: {result["orbital_period"]}</p>
            ) : (
              ""
            )}
            {result["climate"] ? <p>Climate: {result["climate"]}</p> : ""}
            {result["gravity"] ? <p>Gravity: {result["gravity"]}</p> : ""}
            {result["model"] ? <p>Model: {result["model"]}</p> : ""}
            {result["vehicle_class"] ? (
              <p>Class: {result["vehicle_class"]}</p>
            ) : (
              ""
            )}
            {result["title"] ? <h3>{result["title"]}</h3> : ""}
            {result["episode_id"] ? <p>Episode: {result["episode_id"]}</p> : ""}
            {result["classification"] ? (
              <p>Classification: {result["classification"]}</p>
            ) : (
              ""
            )}
          </li>
        );
      });
     

  render() {
    return <ul>{this.searchResults()}</ul>;
  }
}
