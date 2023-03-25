import React, { useState } from "react";

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  const [active, setActive] = useState(1);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginateActive = (number) => {
    paginate(number);
    setActive(number);
  };

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number, i) => {
          return (
            <li key={number} className="page-item">
              <button
                onClick={() => paginateActive(number)}
                className={`page-link ${active === number && "active"}`}
              >
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
