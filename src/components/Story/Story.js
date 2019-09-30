import React from "react";
import { Link } from "@reach/router";
import useStory from "../../hooks/useStory";
import ErrorMessage from "../Error/ErrorMessage";
import './story.css';
import StoryCommentsSections from "./StoryCommentsSection";

const getMarkup = data => ({
  __html: data,
});

const Story = ({ itemId }) => {
  const [story, err] = useStory(itemId);

  if (err) {
    return <ErrorMessage />;
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
      <StoryCommentsSections commentsList={story.kids} />
    </>
  );
};

export default Story;
