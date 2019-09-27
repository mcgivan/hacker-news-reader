import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import { fetchUser } from "../utils/api";
import useStory from "../hooks/useStory";
import ItemsList from "./ItemsList";

const getMarkup = data => ({
  __html: data,
});

const TitleView = ({ id }) => {
  const [data, fetchingError] = useStory(id);

  if (fetchingError) {
    return null;
  }

  if(!data) {
    return null;
  }

  return (
    <div>
      <Link to={`./story/${data.id}`}>{data.title}</Link>
    </div>
  );
};

const ItemsListWithTitleView = ItemsList(TitleView);

const UserPage = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (user) {
      return;
    }

    fetchUser(userId)
      .then(data => {
        if (data) {
          setUser(data);
          setError(false);
        } else {
          setError(true);
        }
      })
      .catch(e => {
        console.log(e);
        setError(true);
      });
  }, [userId]);

  if (!user) {
    return <div>Fetching user info...</div>;
  }

  return (
    <div className="user-wrapper row">
      <div className="two columns">
        <a href="#" onClick={() => window.history.back()}>
          &lArr; Back
        </a>
      </div>
      <div className="ten columns">
        <h3>{user.id}</h3>
        <pre dangerouslySetInnerHTML={getMarkup(user.about)} />
        <hr />
        {ItemsListWithTitleView(user.submitted.slice(0, 10))}
      </div>
    </div>
  );
};

export default React.memo(UserPage);
