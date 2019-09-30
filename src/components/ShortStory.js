import React from "react";
import { Link } from "@reach/router";
import useStory from "../hooks/useStory";
import ErrorMessage from "./ErrorMessage";

const getDateString = date => {
  const fullDate = new Date(+date * 1000);
  const [, month, day, year] = fullDate.toDateString().split(" ");
  const timeString = fullDate
    .toLocaleTimeString()
    .split(":")
    .slice(0, 2)
    .join(":");

  return `${month} ${day}, ${year} at ${timeString}`;
};

function ShortStory({ id }) {
  const [data, fetchingError] = useStory(id);

  if (fetchingError) {
    return <ErrorMessage />;
  }
  if (!data) {
    return (
      <div className="short-story preloading">
        <h4 className="story-title loading" aria-hidden="true" ></h4>
        <div className="story-short-bottom">
          <span className="story-author loading"></span>
          <span className="story-date loading"></span>
        </div>
      </div>
    );
  }
  return (
    <div className="short-story row">
      <h4 className="story-title">
        <Link to={`./story/${data.id}`}>{data.title}</Link>
      </h4>
      <div className="story-short-bottom">
        <span className="story-author">
          by <Link to={`./user/${data.by}`}>{data.by}</Link>
        </span>
        <span className="story-date">{getDateString(data.time)}</span>
      </div>
    </div>
  );
}

export default React.memo(ShortStory);
