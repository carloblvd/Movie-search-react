import { faArrowUp, faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Footer = ({ modalOpen, modalStatus }) => {
  return (
    <section id="footer">
      <footer>
        <div className="footer__content">
          <div className="footer__logo--wrapper">
            <a href="#nav">
              <span className="footer__logo">
                <FontAwesomeIcon icon={faFilm} />
              </span>
            </a>
            <div className="logo--popper">
              <span>Top </span>
              <span>
                <FontAwesomeIcon icon={faArrowUp} />
              </span>
            </div>
          </div>
          <ul className="footer__links">
            <li className="footer__link">
              <Link to="/" className="light-green link__hover-effect">
                Home
              </Link>
            </li>
            <li className="footer__link">
              <Link
                to="/"
                className="light-green link__hover-effect"
                href="#search">
                Search
              </Link>
            </li>
            <li className="footer__link">
              <Link
                to="/"
                className="light-green link__hover-effect"
                href="#trending">
                Trending
              </Link>
            </li>
            <li className="footer__link contact__button" onClick={modalOpen}>
              <a className="light-green footer__contact">Contact</a>
            </li>
          </ul>
          <div className="copyright">Copyright © 2023 Carlo Munoz</div>
        </div>
        {modalStatus ? <Modal modalOpen={modalOpen} /> : null}
      </footer>
    </section>
  );
};

export default Footer;
