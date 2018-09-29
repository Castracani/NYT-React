import React, { Component } from "react";
import API from "../../utils/API";
import "./SearchForm.css";

class SearchForm extends Component {
  state = {
    articles: [],
    q: "",
    begin_date: "",
    end_date: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };
  
  getArticles = () => {
    API.getArticles({
      q: this.state.q,
      begin_date: this.state.begin_date,
      end_date: this.state.end_date
    })
      .then(res =>
        this.setState({ 
          articles: res.data })
      )
      .catch(err => console.log(err));
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.getArticles();
  }

  render() {
    console.log(this.state.articles)
    return (
      <form>
        {/* Search term div */}
        <div className="form-group">
          <label for="search">Search Term:</label>
          <input
           type="text"
          className="form-control"
          placeholder="Search for articles here" 
          id="search-term"
          name="q"
          value={this.state.q}
          onChange={this.handleInputChange}
           />
        </div>

        {/* Start year div */}
        <div class="form-group">
          <label for="start-year">Start Year:</label>
          <input 
          type="text" 
          className="form-control" 
          placeholder="1400" 
          id="start-year"
          name="begin_date"
          value={this.state.begin_date}
          onChange={this.handleInputChange} 
          />
        </div>

        {/* End year div */}
        <div class="form-group">
          <label for="end-year">End Year:</label>
          <input type="text" 
          className="form-control" 
          placeholder="8000" 
          id="end-year" 
          name="end_date"
          value={this.state.end_date}
          onChange={this.handleInputChange}
          />
        </div>

        {/* Buttons */}
        <button type="submit" 
          className="btn btn-default"
          onClick={this.handleFormSubmit}
          id="run-search">
        <i className="fa fa-search"></i> Search
        </button>
        <button 
           className="btn btn-default" 
           id="clear-all">
          <i className="fa fa-trash"></i> Clear Parameters
        </button>

      </form>
    )
  }
}

export default SearchForm;