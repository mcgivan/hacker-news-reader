import React from "react";
import { Link } from "@reach/router";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 style={{textAlign: 'center'}}>404</h1>
      <p>Sorry! Wrong url...</p>
      <div>
        <Link to="./">Home</Link>
      </div>
    </div>
  );
};

export default React.memo(ErrorPage);
