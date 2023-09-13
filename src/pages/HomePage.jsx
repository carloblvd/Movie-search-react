import React from "react";
import Landing from "../components/Landing";
import Trending from "../components/Trending";

const HomePage = ({ searchInput, setMovieIMDB, setSearchInput }) => {
  return (
    <>
      <Landing
        searchInput={searchInput}
        setMovieIMDB={setMovieIMDB}
        setSearchInput={setSearchInput}
      />
      <Trending setMovieIMDB={setMovieIMDB} />
    </>
  );
};

export default HomePage;
