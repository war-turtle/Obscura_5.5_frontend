import React from "react";

const Home = () => (
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
            <h1>OBSCURA</h1>
            <h4>NIT Kurukshetra online crypt hunt game.</h4>
            <br />
            <div className="row">
              <div className="col s12 l6 offset-l3">
                <div className="row">
                  <div className="col l6 s12 col-content">
                    <a className="button button-plain button-border button-pill button-block button-uppercase">
                      <b>Continue with Google</b>
                    </a>
                  </div>
                  <div className="col l6 s12 col-content">
                    <a className="button button-plain button-border button-pill button-block button-uppercase">
                      <b>Continue with Facebook</b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="row center">
        <h1>Instructions</h1>
        <div className="col s6">dfgdf</div>
        <div className="col s6">
          <img
            className="responsive-img"
            src="/images/instructions.png"
            alt="instructions"
            width="60%"
          />
        </div>
      </div>
    </div>
    <div className="section" id="gradient">
      Some section
    </div>
    <div className="section grey lighten-4">Some section</div>
  </div>
);

export default Home;
