import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Modal from "./ui/Modal";
import { Link } from "react-router-dom";

const Nav = ({ modalOpen, modalStatus }) => {
  return (
    <section id="nav">
      <nav id="nav">
        <Link to="/">
          <div className="nav__logo--wrapper">
            <span className="nav__logo">
              <FontAwesomeIcon icon={faFilm} />
            </span>
            <div className="logo--popper nlp">
              <span>Home</span>
            </div>
          </div>
        </Link>
        <ul className="nav__links">
          <li className="nav__link">
            <Link to="/" className="light-green link__hover-effect">
              Search
            </Link>
          </li>
          <li className="nav__link">
            <Link to="/#trending" className="light-green link__hover-effect">
              Trending
            </Link>
          </li>
          <button className="nav__link contact__button" onClick={modalOpen}>
            <span className="light-green nav__contact">Contact</span>
          </button>
        </ul>
      </nav>
      {modalStatus ? <Modal modalOpen={modalOpen} /> : null}
    </section>
  );
};

export default Nav;
