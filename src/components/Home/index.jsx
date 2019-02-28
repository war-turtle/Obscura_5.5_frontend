import React from 'react';
import Login from '../Login';

import './index.css';

const Home = () => (
  <div className="row">
    <div className="col s12 m6">
      <div className="vertical-section">
        <h3>
          ObscurA
        </h3>
        <p style={{ fontSize: '20px', textAlign: 'center' }}>
          You know you're playing ObscurA when you can't fall asleep
          because reality is
          finally
          better than your dreams
        </p>
        <Login />
      </div>
    </div>

    <div className="col s12 m6 ">
      <div className="vertical-section">
        <img className="main-image" src="/images/puzzle.png" alt="wow" />
      </div>
    </div>

    <div className="col s12 m6 push-m6">
      <div className="vertical-section">
        <h3>
          Rules
        </h3>
        <div className="center-align">
          <p>
            * Use of Google is permitted. Whats more, we recommend the use of Google.
          </p>
          <p>
            * Upper case characters and spaces are not permitted in the answers.
          </p>
          <p>
            * Out of the box thinking is encouraged as ObscurA puts up questions which require unconventional line of thought.
          </p>
          <p>
            * We give hints only if asked properly.
          </p>
          <p>
            * Keep an eye on our FB profile and Twitter handle as we will regularly post hints and updates there.
          </p>
        </div>
      </div>
    </div>

    <div className="col s12 m6 pull-m6">
      <div className="vertical-section">
        <img className="main-image" src="/images/team-work.png" alt="wow" />
      </div>
    </div>

  </div>
);

export default Home;
