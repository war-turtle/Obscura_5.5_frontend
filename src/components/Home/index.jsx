import React from 'react';
import loadjs from 'loadjs';
import Footer from '../Footer';
import Login from '../Login';

class Home extends React.Component {
  constructor() {
    super();
    loadjs('/js/init.js');
  }

  render() {
    return (
      <div id="fullpage">
        <div className="section" id="gradient">
          <div className="row center">
            <div className="col s12">
              <img
                className="responsive-img"
                src="/images/obscuraLogo.png"
                width="30%"
                alt="logo"
              />
            </div>
            <div className="row">
              <div className="col s12">
                <h1>
                  OBSCURA
                </h1>
                <h4>
                  NIT Kurukshetra online crypt hunt game.
                </h4>
                <br />
                <div className="row">
                  <div className="col s12 l6 offset-l3">
                    <div className="row">
                      {/* <div className="col l6 s12 col-content">
                        <a className="button button-plain button-border button-pill button-block button-uppercase">
                          <b>Continue with Google</b>
                        </a>
                      </div>
                      <div className="col l6 s12 col-content">
                        <a className="button button-plain button-border button-pill button-block button-uppercase">
                          <b>Continue with Facebook</b>
                        </a>
                      </div> */}
                      <Login />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="row center">
            <div className="col s6 ">
              <img
                className="responsive-img"
                src="/images/rules.jpg"
                alt="Rules"
                width="60%"
              />
            </div>
            <div className="col s5">
              <h4>
                RULES
              </h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condimentum tortor eu viverra dignissim.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condimentum tortor eu viverra dignissim.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condimentum tortor eu viverra dignissim.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condimentum tortor eu viverra dignissim.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condimentum tortor eu viverra dignissim.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condimentum tortor eu viverra dignissim.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condimentum tortor eu viverra dignissim.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="row center">
            <h3>
              WHAT'S NEW
            </h3>
            <div className="col s6">
              <img
                className="responsive-img"
                src="/images/team.png"
                alt="team"
                width="60%"
              />
            </div>
            <div className="col s5">
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condimentum tortor eu viverra dignissim.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condimentum tortor eu viverra dignissim.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condimentum tortor eu viverra dignissim.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condimentum tortor eu viverra dignissim.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condimentum tortor eu viverra dignissim.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condimentum tortor eu viverra dignissim.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condimentum tortor eu viverra dignissim.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="row">
            <div className="col s12 center">
              <div id="mt" className="center">
                <h5>
                  Subscribe your email for our updates
                </h5>
                <div className="row">
                  <span className="input-field col s6 offset-s3">
                    <input id="email" type="email" className="validate" />
                    <label htmlFor="email">
                      Email
                    </label>
                    <button
                      className="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                    >
                      Submit
                      <i className="material-icons right">
                        send
                      </i>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
