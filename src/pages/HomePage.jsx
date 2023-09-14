import React from "react";
import Landing from "../components/Landing";
import Trending from "../components/Trending";

const HomePage = ({ searchInput, setMovieIMDB, setSearchInput }) => {
  return (
    <>
      <div className="min-height">
        <Landing
          searchInput={searchInput}
          setMovieIMDB={setMovieIMDB}
          setSearchInput={setSearchInput}
        />
        <Trending setMovieIMDB={setMovieIMDB} />
      </div>
    </>
  );
};

export default HomePage;
