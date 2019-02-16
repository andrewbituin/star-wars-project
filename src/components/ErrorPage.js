import React from "react";
import {Link} from 'react-router-dom';

export default class ErrorPage extends React.Component {
  render() {
    return (
      <div>
        <h2>404 Not Found</h2>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    );
  }
}
