import React, { Component } from "react";
import "./SearchForm.css";

class SearchForm extends Component {

  render() {
    return (
      <form>
        {/* Search term div */}
        <div className="form-group">
          <label for="search">Search Term:</label>
          <input type="text" className="form-control" placeholder="Search for articles here" id="search-term" />
        </div>

        {/* Start year div */}
        <div class="form-group">
          <label for="start-year">Start Year:</label>
          <input type="text" className="form-control" placeholder="1400" id="start-year" />
        </div>

        {/* End year div */}
        <div class="form-group">
          <label for="end-year">End Year:</label>
          <input type="text" className="form-control" placeholder="8000" id="end-year" />
        </div>

        {/* Buttons */}
        <button type="submit" className="btn btn-default" id="run-search">
          <i className="fa fa-search"></i> Search</button>
        <button class="btn btn-default" id="clear-all">
          <i className="fa fa-trash"></i> Clear Parameters</button>

      </form>
    )
  }
}

export default SearchForm;