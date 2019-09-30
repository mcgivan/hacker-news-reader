import React from "react";
import { Link } from "@reach/router";
import useStory from "../../hooks/useStory";
import { getDateString } from "../../utils/utils";

const getMarkup = data => ({
  __html: data,
});

export default function StoryComment({ id }) {
  const [comment, error] = useStory(id);
  if (error) {
    return null;
  }
  if (!comment) {
    return (
      <div className="story-comment">
        <div className="comment-top">
          <Link className="comment-author loading" to="" onClick={(e)=>e.preventDefault()}>
          </Link>
          <span className="comment-time loading"></span>
        </div>
        <hr />
        <div
          className="comment-content loading"
        />
        <div
          className="comment-content loading"
        />
        <div
          className="comment-content last-line loading"
        />
      </div>
    );
  }
  return (
    <div className="story-comment">
      <div className="comment-top">
        <Link className="comment-author" to={`../../user/${comment.by}`}>
          {comment.by}
        </Link>
        <span className="comment-time">{getDateString(comment.time)}</span>
      </div>
      <hr />
      <div
        className="comment-content"
        dangerouslySetInnerHTML={getMarkup(comment.text)}
      />
    </div>
  );
}
