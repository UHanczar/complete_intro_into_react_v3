// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setSearchTerm } from './../actions/actionCreators';

const Header = (props: {showSearch?: boolean, handleSearchTermChange: Function, searchTerm: string }) => {

  const  searchInput = props.showSearch ? <input type="text" placeholder="Search" value={props.searchTerm} onChange={props.handleSearchTermChange} /> : <Link to='/search'>Back to Search</Link>;

  return (
    <header>
      <h2><Link to='/'>svideo</Link></h2>
      {searchInput}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false,
};

const mapStateToProps = (state) => ({ searchTerm: state.searchTerm });

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
