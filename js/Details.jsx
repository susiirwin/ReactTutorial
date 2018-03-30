// @flow

import React from 'react';
import Header from './Header';

const Details = (props: { show: Show }) => {
  const { title, description, year, poster, trailer } = props.show;
  return (
    <div className="details">
      <Header />
      <section>
        <h1>{title}</h1>
        <h2>({year})</h2>
        <img src={`/public/img/posters/${poster}`} alt={`Poster for ${title}`} />
        <p>{description}</p>
      </section>
      <div>
        <iframe
          title={title}
          src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0:amp;showinfo=0`}
        />
      </div>
    </div>
  );
};

export default Details;
