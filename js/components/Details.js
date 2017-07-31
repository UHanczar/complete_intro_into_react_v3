import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import Spinner from './Spinner';

class Details extends Component {

  state = {
    apiData: { rating: '' }
  }

  props: {
    show: Show
  };

  componentDidMount() {
    axios
    .get(`http://localhost:3000/${this.props.show.imdbID}`)
    .then((responce: { data: { rating: string } }) => {
      this.setState({ apiData: responce.data });
    });
  }

  render() {
    const { title, description, year, poster, trailer } = this.props.show;

    const ratingComponent = this.state.apiData.rating ? <h3>{this.state.apiData.rating}</h3> : <Spinner />;
    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>{year}</h2>
          {ratingComponent}
          <img src={`/public/img/posters/${poster}`} alt={`Poster for ${title}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            title={`Trailer for ${title}`}
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
};

export default Details;