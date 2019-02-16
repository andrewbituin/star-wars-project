import React from "react";
import { Link } from "react-router-dom";
import Results from './Results';

export default class ResultsPage extends React.Component {
  state = {
    results: [],
    loading: true,
  };
  generateLoading = () => {
    return this.state.loading ? <div>Loading...</div> : "";
  };
  componentWillMount() {
    this.generateLoading();
  }
  componentDidMount() {
    const searchParam = this.props.searchTerm
      .trim()
      .split()
      .join("&");
    fetch(`https://swapi.co/api/${this.props.category}/?search=${searchParam}`)
    .then(res => {
        console.log(res)
        if (!res.ok) throw new Error(res);
        return res.json();
      })
      .then(data => {
        console.log(data.results);
        this.setState({ results: data.results, loading: false });
        this.generateLoading();
      })
      .catch(err => {
          console.log(err.message)
          this.setState({error: true})
          this.props.history.push('/error')
        });
  }
  render() {
    return (
      <div>
        <h2>{this.generateLoading()}</h2>
        <Results results={this.state.results}/>
        <Link to='/'>
          <button type="click">Back</button>
        </Link>
      </div>
    );
  }
}
