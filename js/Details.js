import React from 'react';

const Details = (props) => {
  const { title, description, year, poster, trailer, imdbID } = props.show;
  return (
    <div className='details'>
      <header>
        <h1>svideo</h1>
      </header>
      <section>
        <h1>{title}</h1>
        <h2>{year}</h2>
        <img src={`/public/img/posters/${imdbID}`} alt={`Poster for ${title}`} />
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
};

export default Details;
