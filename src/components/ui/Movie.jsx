import React from "react";
import { useNavigate } from "react-router-dom";

const Movie = ({ movie, ID, setMovieIMDB }) => {
  const history = useNavigate();

  function goToMovieInfoPage() {
    setMovieIMDB(ID);
    history(`/${ID}`);
  }

  return (
    <>
      <div className="movie">
        <figure className="movie__img--wrapper" onClick={goToMovieInfoPage}>
          <img src={movie.Poster} alt="" className="movie__img" />
        </figure>
        <div className="movie__info">
          <h3 className="movie__title">
            {movie.Title}
            <br />
            <span className="movie__year">{movie.Year}</span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Movie;
