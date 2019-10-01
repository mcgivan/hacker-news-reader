import React, { useEffect, useState } from "react";
import ItemsList from "../ItemsList";
import StoryComment from "./StoryComment";

const ItemsListWithComment = ItemsList(StoryComment);

export default function StoryCommentsSections({ commentsList }) {
  const [itemsToShow, setItemsToShow] = useState([]);
  const [loadRest, setLoadRest] = useState(false);

  useEffect(() => {
    if (!commentsList || (commentsList && !commentsList.length)) {
      return;
    }
    if (loadRest) {
      setItemsToShow(commentsList);
    } else {
      setItemsToShow(commentsList.slice(0, 5));
    }
  }, [loadRest]);

  return commentsList && commentsList.length ? (
    <div className="full-story-comments">
      <h5>Comments:</h5>
      {ItemsListWithComment(itemsToShow)}
      {commentsList && commentsList.length > 5 && !loadRest ? (
        <div className="" style={{textAlign: 'center'}}>
          <button onClick={() => setLoadRest(true)}>Load more ({commentsList.length - 5})</button>
        </div>
      ) : null}
    </div>
  ) : null;
}
