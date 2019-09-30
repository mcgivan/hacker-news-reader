import React from "react";

const Pagination = ({ pages, currentPage }) =>
  pages && pages.length ? (
    <div className="pages row">
      <ul className="pagination">
        {pages.map(([i, runPage]) => (
          <li key={i}>
            <button
              className={`btn-link ${i === currentPage + 1 ? "current" : ""}`}
              onClick={i === currentPage + 1 ? () => {} : () => runPage()}
            >
              {i}
            </button>
          </li>
        ))}
      </ul>
    </div>
  ) : null;

export default React.memo(Pagination);
