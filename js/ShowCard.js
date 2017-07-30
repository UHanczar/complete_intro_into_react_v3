// @flow

import React, { Component } from 'react';
import {string } from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right:10px;
`;

class ShowCard extends Component {
  shouldComponentUpdate(nextProps) {
    // in case we want update some part
    // return this.state.rating !== nextProps.rating;
    return false;
  }

  props: Show;

  render() {
    return (
      <Wrapper to={`/details/${this.props.imdbID}`}>
        <Image src={`/public/img/posters/${this.props.poster}`} alt={`${this.props.title} Show Poster`} />
        <div>
          <h3>{this.props.title}</h3>
          <h4>({this.props.year})</h4>
          <p>{this.props.description}</p>
        </div>
      </Wrapper>
    );
  }
}

export default ShowCard;
