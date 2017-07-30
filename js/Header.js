// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props: {showSearch?: boolean, handleSearchTermChange?: Function, searchTerm?: string }) => {

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
  handleSearchTermChange: function noop() {},
  searchTerm: ''
};

export default Header;
