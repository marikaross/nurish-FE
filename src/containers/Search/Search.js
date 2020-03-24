import React, { Component } from "react";
import { fetchResults } from "../../thunks/fetchResults";
import { withRouter, NavLink } from "react-router-dom";
import { addFilterResults } from "../../actions";
import { Input } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Search.css";

export class Search extends Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    let keyWord = this.state.input.replace(/\s/g, "");
    let url = `https://nurish-app.herokuapp.com/api/v1/search?key_word=${keyWord}`;
    await this.props.fetchResults(url);
    this.props.history.push("/formulas");
  };

  handleInput = input => {
    this.setState({ input });
  };

  render() {
    return (
      <div className="form-container search-container">
        <div className="link-container">
          <NavLink to="/">back</NavLink>
          <NavLink to="/filter">filter</NavLink>
          <NavLink to="/formulas">browse</NavLink>
        </div>
        <form className="search-field" onSubmit={this.handleSubmit}>
          <Input
            action="Search"
            onChange={event => this.handleInput(event.target.value)}
            value={this.state.value}
            placeholder="enter your criteria"
          />
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  filterResults: state.filterResults,
  isLoading: state.isLoading,
  hasErrored: state.hasErrored
});

export const mapDispatchToProps = dispatch => ({
  addFilterResults: filterResults => dispatch(addFilterResults(filterResults)),
  fetchResults: url => dispatch(fetchResults(url))
});

Search.propTypes = {
  filterResults: PropTypes.array,
  fetchResults: PropTypes.func,
  history: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
