import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="row">
    <div className="col s12">
      <h1 align="center">
        404 Level not Found
      </h1>
      <h3 align="center">
        If you have completed the levels then wait for the admin
      </h3>
    </div>
    <center>
      <Link to="/">
        Return to Home Page
      </Link>
    </center>
  </div>

);

export default NotFound;
