import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";

const Modal = ({ modalOpen }) => {
  const [nameUp, setNameUp] = useState(false);
  const [emailUp, setEmailUp] = useState(false);
  const [messageUp, setMessageUp] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const form = useRef();

  // function contact(event) {
  //   event.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_gnajquf",
  //       "template_r2rjfjm",
  //       event.target,
  //       "fUrOyNKYMUln64o4F"
  //     )
  //     .then(() => {
  //       console.log("it worked g");
  //       setSuccessMessage(true);
  //       setTimeout(() => {
  //         setSuccessMessage(false);
  //       }, 3000);
  //     })
  //     .catch(() => {
  //       alert(
  //         "The email service is temporarily unavailable. Please contact me directly at carloblvd@gmail.com"
  //       );
  //     });
  // }

  function moveNameUp() {
    setNameUp(true);
  }

  function moveEmailUp() {
    setEmailUp(true);
  }

  function moveMessageUp() {
    setMessageUp(true);
  }

  return (
    <>
      <div className="modal">
        <div className="modal__content">
          <h3 className="modal__message">
            <p className="my-name">
              Hi my name is <span className="og-green">Carlo</span>!
            </p>

            <p className="modal__header">
              I created this website. If you like it and would like to
              <span className="og-green"> contact me</span>, you can use this
              form!
            </p>
          </h3>
          <ul className="modal__social--links">
            <a
              className="modal__social--link"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/carlo-munoz-04069a164">
              <span className="modal__social--icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
            </a>
            <a
              className="modal__social--link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/carloblvd">
              <span className="modal__social--icon">
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>
            <a
              className="modal__social--link"
              rel="noreferrer"
              target="_blank"
              href="https://resume.io/r/nLMmxt1JD">
              <span className="modal__social--icon">
                <FontAwesomeIcon icon={faFileAlt} />
              </span>
            </a>
          </ul>
          <form ref={form} className="contact__form">
            <div className="form__item">
              {!nameUp ? (
                <label className="label form__item--label">Name</label>
              ) : (
                <label className="label moveLabelUp form__item--label">
                  Name
                </label>
              )}
              <input
                onClick={moveNameUp}
                type="text"
                className="input"
                name="user_name"
                required
              />
            </div>
            <div className="form__item">
              {!emailUp ? (
                <label className="label form__item--label">Email</label>
              ) : (
                <label className="label moveLabelUp form__item--label">
                  Email
                </label>
              )}
              <input
                onClick={moveEmailUp}
                type="email"
                className="input"
                name="user_email"
                required
              />
            </div>
            <div className="form__item">
              {!messageUp ? (
                <label className="label form__item--message">Message</label>
              ) : (
                <label className="label moveLabelUp form__item--message">
                  Message
                </label>
              )}
              <textarea
                onClick={moveMessageUp}
                type="text"
                className="message"
                name="message"
                required></textarea>
            </div>
            <div type="submit" value="Send" className="modal__contact--button">
              <button id="contact__submit" className="form__submit">
                Send!
              </button>
              {successMessage ? (
                <h4 className="success__message">Thank you for the message!</h4>
              ) : null}
            </div>
          </form>
        </div>
        <button className="modal__close" onClick={modalOpen}>
          <span>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </button>
      </div>
    </>
  );
};

export default Modal;
