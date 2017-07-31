// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { object } from 'prop-types';
import type { RouterHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { setSearchTerm } from './../actions/actionCreators';

class Landing extends Component {
  // static contexTypes = {
  //   history: object
  // }
  props: {
    searchTerm: string,
    handleSearchTermChange: Function,
    history: RouterHistory
  }

  goToSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.history.push('/search');
  }

  render() {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input
            value={this.props.searchTerm}
            onChange={this.props.handleSearchTermChange}
            type='text'
            placeholder='Search'
          />
        </form>
        <Link to='/search'>or Browse All</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
