import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "../components/ui/Skeleton";
import Movie from "../components/ui/Movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import errorImg from "../assets/undraw search img.svg";

const MovieSearchPage = ({ searchInput, setSearchInput, setMovieIMDB }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const url = `https://www.omdbapi.com/?apikey=2e1f6500&s=${searchInput}`;

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        try {
          const data = await axios.get(url);
          if (data.data.Error) {
            setErrorMessage(true);
          } else if (data.data.Search) {
            setErrorMessage(false);
            const response = data.data.Search.slice(0, 8);
            setSearchResults(response);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, 500);
  }, [url]);

  function filterMovie(event) {
    const value = event.target.value;
    if (value === "NEW_TO_OLD") {
      let newToOld = [...searchResults].sort(
        (a, b) => b.Year.slice(0, 4) - a.Year.slice(0, 4)
      );
      setSearchResults(newToOld);
    }
    if (value === "OLD_TO_NEW") {
      let oldToNew = [...searchResults].sort(
        (a, b) => a.Year.slice(0, 4) - b.Year.slice(0, 4)
      );
      setSearchResults(oldToNew);
    }
  }

  function movieSearch(event) {
    event.preventDefault();
    const value = event.target.querySelector("#searchInput").value;
    setSearchInput(value);
  }

  return (
    <>
      <section id="search__results">
        <div className="container search__container">
          <div className="row">
            <form
              className="search__wrapper"
              type="submit"
              id="searchForm"
              onSubmit={movieSearch}>
              <input
                className="search__box"
                type="text"
                id="searchInput"
                name="s"
                placeholder="Search Movies..."
                required
              />
              <button type="submit" className="search__button">
                <span>
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </button>
            </form>
          </div>

          {errorMessage ? (
            <>
              <div className="container">
                <div className="movies__error">
                  <div className="error__message">
                    <h1 className="error__header">
                      Unfortunately, we can't find movies with the title
                      <br />"<span className="og-green">{searchInput}</span>"
                    </h1>
                    <br />
                    <p className="error__para">
                      Let's try another title and we'll see what we can find for
                      you!
                    </p>
                  </div>
                  <div className="error__img--wrapper">
                    <img src={errorImg} alt="" className="error__img" />
                  </div>
                </div>
              </div>
            </>
          ) : searchResults.length > 0 ? (
            <>
              <div className="row">
                <div className="search__container">
                  <div className="search__content">
                    <h3 className="search__results">
                      Search results for "{searchInput}"
                    </h3>
                    <select
                      className="search__options"
                      name=""
                      id="filter"
                      defaultValue="SORT"
                      onChange={filterMovie}>
                      <option value="SORT" disabled>
                        Sort
                      </option>
                      <option value="NEW_TO_OLD">New to Old</option>
                      <option value="OLD_TO_NEW">Old to New</option>
                    </select>
                  </div>
                </div>
                <div className="movies">
                  {searchResults.map((movie) => (
                    <Movie
                      movie={movie}
                      setMovieIMDB={setMovieIMDB}
                      ID={movie.imdbID}
                      key={movie.imdbID}
                    />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="container">
              <div className="row">
                <div className="search__container">
                  <div className="search__content">
                    <h3 className="search__results">
                      Search results for "{searchInput}"
                    </h3>
                    <select
                      className="search__options"
                      name=""
                      id="filter"
                      defaultValue="SORT"
                      onChange={filterMovie}>
                      <option value="SORT" disabled>
                        Sort
                      </option>
                      <option value="NEW_TO_OLD">New to Old</option>
                      <option value="OLD_TO_NEW">Old to New</option>
                    </select>
                  </div>
                </div>
                <div className="movie__skeletons">
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default MovieSearchPage;
