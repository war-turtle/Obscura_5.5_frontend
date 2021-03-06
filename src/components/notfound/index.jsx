import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="row">
    <div className="col s12 center-align">
      <h1>
        404 - Not Found
      </h1>
      <p className="flow-text">
        We think you are at wrong place
      </p>
      <Link to="/">
        Return to Home Page
      </Link>
    </div>
  </div>
);

export default NotFound;
