import React, { useEffect, useState } from "react";
import { fetchUser } from "../../utils/api";
import ItemsList from "../ItemsList";
import ErrorMessage from "../Error/ErrorMessage";
import UserPublishedStory from './UserPublishedStory';
import './user.css';

const getMarkup = data => ({
  __html: data,
});

const ItemsListWithUserPublishedStory = ItemsList(UserPublishedStory);

const UserPage = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let inProgress = true;
    let controller = new AbortController();
    fetchUser(userId, { signal: controller.signal })
      .then(data => {
        if (inProgress) {
          if (data) {
            setUser(data);
            setError(false);
          } else {
            setError(true);
          }
        }
      })
      .catch(e => {
        console.log(e);
        inProgress && setError(true);
      });
    return () => {
      inProgress = false;
      controller.abort();
    };
  }, [userId]);

  if (error) {
    return <ErrorMessage />;
  }

  if (!user) {
    return (
      <div className="user-wrapper row">
        <div className="two columns">
          <button
            className="btn-link back-button"
            onClick={() => window.history.back()}
          >
            &lArr; Back
          </button>
        </div>
        <div className="ten columns">
          <h3 className="user-name-field loading" aria-hidden="true"></h3>
          <div className="user-info loading" />
          <div className="user-info loading" />
          <div className="user-info last-line loading" />
          <hr />
        </div>
      </div>
    );
  }

  return (
    <div className="user-wrapper row">
      <div className="two columns">
        <button
          className="btn-link back-button"
          onClick={() => window.history.back()}
        >
          &lArr; Back
        </button>
      </div>
      <div className="ten columns">
        <h3 className="user-name-field">{user.id}</h3>
        <div
          className="user-info"
          dangerouslySetInnerHTML={getMarkup(user.about)}
        />
        <hr />
        {ItemsListWithUserPublishedStory(user.submitted.slice(0, 10))}
      </div>
    </div>
  );
};

export default React.memo(UserPage);
