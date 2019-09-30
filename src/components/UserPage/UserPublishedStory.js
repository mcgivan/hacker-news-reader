import React from 'react';
import { Link } from "@reach/router";
import useStory from "../../hooks/useStory";

const UserPublishedStory = ({ id }) => {
  const [data, fetchingError] = useStory(id);

  if (fetchingError) {
    return null;
  }

  if (!data) {
    return <div className="user-story-title loading"></div>;
  }

  if(data && data.type === 'comment') {
    return null;
  }

  return (
    <div className="user-story-title">
      <Link to={`../../story/${id}`}>{data.title}</Link>
    </div>
  );
};

export default UserPublishedStory;