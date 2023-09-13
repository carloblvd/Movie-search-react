import React, { useState } from "react";
import "./index.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieSearchPage from "./pages/MovieSearchPage";
import ScrollToTop from "./components/ui/ScrollToTop";
import MovieInfoPage from "./pages/MovieInfoPage";

function App() {
  const [modalStatus, setModalStatus] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [movieIMDB, setMovieIMDB] = useState(null);

  function modalOpen() {
    setModalStatus(!modalStatus);
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Nav modalOpen={modalOpen} modalStatus={modalStatus} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <HomePage
                setMovieIMDB={setMovieIMDB}
                setSearchInput={setSearchInput}
              />
            }
          />
          <Route
            path={`/movie-search`}
            element={
              <MovieSearchPage
                setMovieIMDB={setMovieIMDB}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />
            }
          />
          <Route
            path={`/${movieIMDB}`}
            element={<MovieInfoPage movieIMDB={movieIMDB} />}
          />
        </Routes>
        <Footer modalOpen={modalOpen} modalStatus={modalStatus} />
      </div>
    </Router>
  );
}

export default App;
