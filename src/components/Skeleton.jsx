import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Skeleton = () => {
  return (
    <>
      <div className="movie__skeleton">
        <div className="movie__poster--skeleton skeleton"></div>
        <div className="movie__title--skeleton skeleton"></div>
        <span className="movies__loading--spinner" aria-label="Loading">
          <FontAwesomeIcon icon={faSpinner} />
        </span>
      </div>
    </>
  );
};

export default Skeleton;
