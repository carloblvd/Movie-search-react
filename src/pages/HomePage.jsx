import React from "react";
import Landing from "../components/Landing";
import Trending from "../components/Trending";

const HomePage = ({ searchInput, setSearchInput }) => {
  return (
    <>
      <Landing searchInput={searchInput} setSearchInput={setSearchInput} />
      <Trending />
    </>
  );
};

export default HomePage;
