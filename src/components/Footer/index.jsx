import React from 'react';

const Footer = () => (
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">
            Obscura 5.5
          </h5>
          <p className="grey-text text-lighten-4">
            Nit Kurukshetra online crypt hunt game
          </p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">
            Quick Links
          </h5>
          <ul>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Leaderboard
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Our Team
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Support
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        © 2018 GAWDS
        <a className="grey-text text-lighten-4 right" href="#!">
          More Links
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
