import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./ui/Movie";

const Trending = ({ setMovieIMDB }) => {
  const apiKey = "2e1f6500";
  const trendingMoviesIds = [
    "tt1517268",
    "tt15398776",
    "tt0439572",
    "tt6791350",
    "tt1695843",
    "tt9603212",
    "tt10638522",
    "tt1462764",
  ];

  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const moviePromises = trendingMoviesIds.map(async (movieId) => {
          const response = await axios.get(
            `https://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`
          );
          return response.data;
        });

        const moviesData = await Promise.all(moviePromises);
        setTrendingMovies(moviesData);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    }

    fetchTrendingMovies();
    // eslint-disable-next-line
  }, [trendingMovies]);

  return (
    <section id="trending">
      <div className="container">
        <div className="row trending__row">
          <h3 className="section__title">Trending</h3>
          <div className="movies">
            {trendingMovies.map((movie) => (
              <Movie
                movie={movie}
                ID={movie.imdbID}
                setMovieIMDB={setMovieIMDB}
                key={movie.imdbID}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
