import React from "react";

const Pagination = ({ pages, currentPage }) =>
  pages && pages.length ? (
    <div className="pages row">
      <ul className="paginator">
        {pages.map(([i, runPage]) => (
          <li key={i}>
            <a
              className={i === currentPage + 1 ? "current" : ""}
              onClick={i === currentPage + 1 ? () => {} : () => runPage()}
            >
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ) : null;

export default React.memo(Pagination);
