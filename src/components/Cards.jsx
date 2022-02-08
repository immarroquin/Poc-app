import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../styles/cards.css";

const Cards = ({ dataState }) => {
  return (
    <Fragment>
      <div className="container-cards">
        {dataState.map((item) => (
          <div className="card mb-3" key={item.num}>
            <Link to={"/details/" + item.num}>
              <img
                className="card-img-top"
                src={item.img}
                alt="Card image cap"
              />
              
            </Link>
            <div className="card-bodys">
                <h1 className="card-title">{item.name}</h1>
              </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default Cards;
