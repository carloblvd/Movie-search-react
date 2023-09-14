import { faArrowLeft, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieInfoPage = ({ movieIMDB }) => {
  const [movieData, setMovieData] = useState(null);
  const url = `https://www.omdbapi.com/?apikey=2e1f6500&i=${movieIMDB}`;
  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        try {
          const data = await axios.get(url);
          setMovieData(data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, 300);
  }, [url]);

  function makeMonthFirst() {
    if (movieData) {
      const customOrder = [1, 0, 2];
      let dateCorrect = movieData.Released.split(" ");
      return customOrder.map((index) => dateCorrect[index]).join(" ");
    }
  }

  return (
    <>
      {movieData ? (
        <section id="movie__info--page">
          <Link to="/movie-search">
            <button className="back__button">
              <span>
                {" "}
                <FontAwesomeIcon icon={faArrowLeft} />{" "}
              </span>
              Search
            </button>
          </Link>
          <div className="container">
            <div className="row">
              <div className="movie__container">
                <div className="movie__info--wrapper">
                  <h1 className="movie__header">{movieData.Title}</h1>
                  <ul className="movie__info--list">
                    <li className="movie__list--item">
                      <b>Release Date:</b> {makeMonthFirst(movieData.Released)}
                    </li>
                    <li className="movie__list--item">
                      <b>Country:</b> {movieData.Country}
                    </li>
                    <li className="movie__list--item">
                      <b>Runtime:</b> {movieData.Runtime}
                    </li>
                    <li className="movie__list--item">
                      <b>Actors:</b> {movieData.Actors}
                    </li>
                  </ul>
                  <p className="movie__plot">{movieData.Plot}</p>
                  <div className="movie__awards">
                    <span>
                      <b>Awards</b>
                    </span>
                    <br />
                    {movieData.Awards}
                  </div>
                </div>
                <figure className="movie__info--img--wrapper">
                  <img
                    src={movieData.Poster}
                    alt=""
                    className="movie__info--img"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section>
            <div className="movie__info--loading">
              <div className="loading__wrapper">
                <span className="loading__spinner">
                  <FontAwesomeIcon icon={faSpinner} />
                </span>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default MovieInfoPage;
