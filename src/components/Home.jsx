import React, { Fragment, useEffect, useState } from "react";
import NavBar from "./NavBar";
import "../styles/home.css";
import Cards from "./Cards";
import Pagination from "./Pagination";
import Filter from "./Filter";

const Home = () => {
  const [dataState, setDataState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage] = useState(15);
  const [filterData] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("data.json")
      .then((pokeData) => pokeData.json())
      .then((data) => setDataState(data.pokemon));
  };

  const lastCard = currentPage * cardPerPage;
  const firstCard = lastCard - cardPerPage;
  const currentCards = dataState.slice(firstCard, lastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleChange = (e) => {
    if (
      e.target.value.length >= 1 ||
      e.key === "Backspace" ||
      e.key === "Delete"
    ) {
      filter(e.target.value);
    }
  };

  const filter = (itemSearch) => {
    const response = dataState.filter((item) => {
      if (
        item.name.toString().toLowerCase().includes(itemSearch.toLowerCase())
      ) {
        return item;
      }
    });
    setDataState(response);
  };

  return (
    <Fragment>
      <div className="container-home">
        <Filter
          handleChange={handleChange}
          dataState={dataState}
          filterData={filterData}
        />
        <Cards dataState={currentCards} />
        <Pagination
          cardPerPage={cardPerPage}
          totalCards={dataState.length}
          paginate={paginate}
        />

        <NavBar />
      </div>
    </Fragment>
  );
};
export default Home;
