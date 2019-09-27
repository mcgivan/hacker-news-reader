import React from "react";
import { Link } from "@reach/router";
import useStory from "../hooks/useStory";

const getMarkup = data => ({
  __html: data,
});

const Story = ({ itemId }) => {
  const [story, err] = useStory(itemId);

  if (err) {
    return <div>Sorry! Error occured</div>;
  }
  if (!story) {
    return null;
  }
  return (
    <>
      <div className="full-story-top">
        <Link
          to="#"
          onClick={() => window.history.back()}
          className="back-button"
        >
          <span>&lArr; Back</span>
        </Link>
      </div>
      <div className="full-story">
        <h1 className="title">{story.title}</h1>
        <div dangerouslySetInnerHTML={getMarkup(story.text)} />
        {story.url ? (
          <div className="full-story-bottom">
            <a target="_blank" href={story.url} rel="noopener noreferrer">
              Read original &rArr;
            </a>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Story;
