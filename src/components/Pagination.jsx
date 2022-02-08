import React, { Fragment } from "react";

const Pagination = ({ cardPerPage, totalCards, paginate }) => {
  const pageNumbers = [];

  for (let index = 1; index <= Math.ceil(totalCards / cardPerPage); index++) {
    pageNumbers.push(index);
  }

  return (
    <Fragment>
      <nav aria-label="Page navigation example dark">
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li className="page-item" key={number}>
              <a
                className="page-link"
                href="#"
                onClick={() => paginate(number)}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Fragment>
  );
};
export default Pagination;
