import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LandingImg from "../assets/movie background img.jpeg";
import { useNavigate } from "react-router-dom";

const Landing = ({ setSearchInput }) => {
  const navigate = useNavigate();

  function movieSearch(event) {
    event.preventDefault();
    navigate(`/movie-search`);
  }

  return (
    <>
      <section id="landing">
        <figure className="landing__img--wrapper">
          <img className="landing__img" src={LandingImg} alt="" />
          <h2 className="landing__header">Any Movie. Any Time.</h2>
        </figure>
      </section>
      <section id="search">
        <div className="search__container">
          <div className="row">
            <form
              className="search__wrapper landing__search--wrapper"
              id="searchForm"
              onSubmit={movieSearch}>
              <input
                className="search__box"
                type="text"
                id="searchInput"
                name="s"
                placeholder="Search Movies..."
                onChange={(e) => setSearchInput(e.target.value)}
                required
              />
              <button
                type="submit"
                className="search__button"
                onClick={movieSearch}>
                <span>
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
