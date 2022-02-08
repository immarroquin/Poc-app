import React, { Fragment } from "react";
import "../styles/home.css";

const Filter = ({ handleChange }) => {
  return (
    <Fragment>
      <div className="form-group">
        <input
          className="form-control"
          placeholder="Search"
          onKeyUp={handleChange}
        />
      </div>
    </Fragment>
  );
};
export default Filter;
