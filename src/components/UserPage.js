import React, { useEffect, useState } from "react";
import { Link, navigate } from "@reach/router";
import { fetchUser } from "../utils/api";
import useStory from "../hooks/useStory";
import ItemsList from "./ItemsList";
import ErrorMessage from "./ErrorMessage";

const getMarkup = data => ({
  __html: data,
});

window.handler = navigate;

const TitleView = ({ id }) => {
  const [data, fetchingError] = useStory(id);

  if (fetchingError) {
    return null;
  }

  if (!data) {
    return <div className="user-story-title loading"></div>;
  }

  return (
    <div className="user-story-title">
      <Link to={`../../story/${id}`}>{data.title}</Link>
    </div>
  );
};

const ItemsListWithTitleView = ItemsList(TitleView);

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
        {ItemsListWithTitleView(user.submitted.slice(0, 10))}
      </div>
    </div>
  );
};

export default React.memo(UserPage);
