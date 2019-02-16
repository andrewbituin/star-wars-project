import React from "react";


export default class SearchForm extends React.Component {
  state = {
    category: "",
    searchTerm: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log("submit")
    this.props.handleUserSearchTerm(this.state.category, this.state.searchTerm);
    this.props.history.push('/results')
  };
  handleDropdownChange = event => {
    this.setState({ category: event.target.value });
  };
  handleSearchTermChange = (event) => {
      this.setState({searchTerm: event.target.value})
  }
  render() {
    return (
      <div>
        
        <form
          className="search-form"
          onSubmit={event => this.handleSubmit(event)}
        >
          <select
            value={this.state.category}
            onChange={event => this.handleDropdownChange(event)}
          >
            <option>Select Category</option>
            <option>people</option>
            <option>planets</option>
            <option>spaceships</option>
            <option>vehicles</option>
            <option>films</option>
            <option>species</option>
          </select>
          <input
            type="text"
            defaultValue="ex., Skywalker"
            onChange={event => this.handleSearchTermChange(event)}
          />
  
            <button type="submit">Search</button>

        </form>
      </div>
      
    );
  }
}
