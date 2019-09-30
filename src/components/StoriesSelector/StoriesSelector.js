import React from "react";
import './selector.css';

const StoriesSelector = ({ perPage, handler }) => (
  <div className="per-page-wrapper row">
    <select defaultValue={perPage} onChange={e => handler(+e.target.value)}>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select>
  </div>
);

export default React.memo(StoriesSelector);
