import React from 'react';
import loadjs from 'loadjs';
// import Footer from '../Footer';
import Login from '../Login';

import './index.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    loadjs('/js/init.js');
  }

  render() {
    return (
      <div id="main">
        <div id="menu">
          <div className="container menu-container">
            <div className="row">
              <div className="col-4 col-sm-12 home my-md-3">
                <a
                  href="#firstPage"
                  className="fas fa-home"
                  style={{ fontSize: '20px' }}
                />
              </div>
              <div className="col-4 col-sm-12 home my-md-3">
                <a
                  href="#secondPage"
                  className="fas fa-chalkboard-teacher"
                  style={{ fontSize: '20px' }}
                />
              </div>
              <div className="col-4 col-sm-12 home my-md-3">
                <a
                  href="#thirdPage"
                  className="fas fa-user-astronaut"
                  style={{ fontSize: '20px' }}
                />
              </div>
            </div>
          </div>
        </div>

        <a
          id="GAWDSLink"
          href="http://gawds.in"
          title="Graphics and Web Development Squad, click to know more."
          target="_blank"
        >
          <span className="glyphicon glyphicon-cutlery" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="37.422"
            width="128"
            version="1.1"
            viewBox="0 0 128 37.422"
          >
            <g transform="matrix(.37663 0 0 .37663 -96.819 -287.24)">
              <path d="m280.56 784.37q4.86 0 9.09 1.89 4.32 1.8 7.47 5.04 3.24 3.15 5.04 7.47 1.89 4.32 1.89 9.18 0 3.6-1.08 6.93-0.99 3.33-2.88 6.12-1.8 2.79-4.41 4.95t-5.67 3.51q3.78 2.34 5.94 6.21 2.25 3.96 2.25 8.73 0 3.69-1.44 6.84-1.35 3.24-3.78 5.58-2.34 2.43-5.58 3.78-3.24 1.44-6.84 1.44v-4.68q2.7 0 5.04-1.08 2.34-0.99 4.05-2.79 1.8-1.71 2.79-4.05 1.08-2.34 1.08-5.04t-1.08-5.04q-0.99-2.34-2.79-4.14-1.71-1.71-4.05-2.79-2.34-0.99-5.04-0.99-4.86 0-9.18-1.8-4.23-1.89-7.47-5.04-3.15-3.24-5.04-7.47-1.8-4.32-1.8-9.18t1.8-9.18q1.89-4.32 5.04-7.47 3.24-3.24 7.47-5.04 4.32-1.89 9.18-1.89zm0 4.77q-3.87 0-7.29 1.53-3.42 1.44-6.03 3.96-2.52 2.52-4.05 6.03-1.44 3.42-1.44 7.29t1.44 7.29q1.53 3.42 4.05 6.03 2.61 2.52 6.03 4.05 3.42 1.44 7.29 1.44t7.29-1.44q3.51-1.53 6.03-4.05 2.52-2.61 3.96-6.03 1.53-3.42 1.53-7.29t-1.53-7.29q-1.44-3.51-3.96-6.03t-6.03-3.96q-3.42-1.53-7.29-1.53zm71.34-5.04q4.86 0 9.18 1.89 4.32 1.8 7.47 5.04 3.24 3.15 5.04 7.47 1.89 4.32 1.89 9.18v22.5h-4.77v-8.37q-3.15 4.32-8.1 6.84-4.86 2.52-10.71 2.52-4.86 0-9.18-1.8-4.23-1.89-7.47-5.04-3.15-3.24-5.04-7.47-1.8-4.32-1.8-9.18t1.8-9.18q1.89-4.32 5.04-7.47 3.24-3.24 7.47-5.04 4.32-1.89 9.18-1.89zm0 4.77q-3.87 0-7.29 1.53-3.42 1.44-6.03 3.96-2.52 2.52-4.05 6.03-1.44 3.42-1.44 7.29t1.44 7.29q1.53 3.42 4.05 6.03 2.61 2.52 6.03 4.05 3.42 1.44 7.29 1.44t7.29-1.44q3.51-1.53 6.03-4.05 2.52-2.61 3.96-6.03 1.53-3.42 1.53-7.29t-1.53-7.29q-1.44-3.51-3.96-6.03t-6.03-3.96q-3.42-1.53-7.29-1.53zm69.15 42.39q-3.69 0-6.93-1.35-3.15-1.44-5.58-3.78-2.34-2.43-3.78-5.58-1.35-3.24-1.35-6.93v-28.35h4.77v28.35q0 2.7 0.99 5.13 0.99 2.34 2.7 4.14 1.8 1.71 4.14 2.7t5.04 0.99 5.04-0.99 4.05-2.7q1.8-1.8 2.79-4.14 1.08-2.43 1.08-5.13v-28.35h4.68v28.35q0 2.7 0.99 5.13 1.08 2.34 2.79 4.14 1.8 1.71 4.14 2.7t5.04 0.99 5.04-0.99 4.05-2.7q1.8-1.8 2.79-4.14 1.08-2.43 1.08-5.13v-28.35h4.68v28.35q0 3.69-1.44 6.93-1.35 3.15-3.78 5.58-2.34 2.34-5.58 3.78-3.24 1.35-6.84 1.35-4.86 0-8.91-2.34-4.05-2.43-6.39-6.48-2.34 4.05-6.39 6.48-3.96 2.34-8.91 2.34zm96.95-47.16q5.85 0 10.71 2.61 4.86 2.52 8.1 6.84v-30.87h4.68v45q0 4.86-1.89 9.18-1.8 4.23-5.04 7.47-3.15 3.15-7.47 5.04-4.23 1.8-9.09 1.8t-9.18-1.8q-4.23-1.89-7.47-5.04-3.15-3.24-5.04-7.47-1.8-4.32-1.8-9.18t1.8-9.18q1.89-4.32 5.04-7.47 3.24-3.24 7.47-5.04 4.32-1.89 9.18-1.89zm0 4.77q-3.87 0-7.29 1.53-3.42 1.44-6.03 3.96-2.52 2.52-4.05 6.03-1.44 3.42-1.44 7.29t1.44 7.29q1.53 3.42 4.05 6.03 2.61 2.52 6.03 4.05 3.42 1.44 7.29 1.44t7.29-1.44q3.42-1.53 5.94-4.05 2.61-2.61 4.05-6.03 1.53-3.42 1.53-7.29t-1.53-7.29q-1.44-3.51-4.05-6.03-2.52-2.52-5.94-3.96-3.42-1.53-7.29-1.53zm60.48 20.7q-2.34 0-4.5-0.81-2.07-0.9-3.69-2.34-1.53-1.53-2.52-3.51-0.9-2.07-0.99-4.41-0.18-1.26 0-2.7 0.09-2.34 0.99-4.32 0.99-2.07 2.52-3.51 1.62-1.53 3.69-2.34 2.16-0.9 4.5-0.9h16.92v4.68h-16.92q-2.79 0-4.86 1.89-1.98 1.89-2.16 4.68-0.18 1.17 0 2.34 0.18 2.79 2.16 4.68 2.07 1.89 4.86 1.89h6.66 0.09q2.34 0 4.41 0.9 2.16 0.81 3.69 2.34 1.62 1.53 2.52 3.6 0.99 1.98 1.08 4.32v2.43 0.09 0.18q0 2.43-0.99 4.5-0.9 2.07-2.52 3.69-1.62 1.53-3.78 2.43-2.07 0.9-4.5 0.9h-17.37v-4.68h17.37q2.61 0 4.59-1.62 1.98-1.71 2.43-4.32 0-0.27 0-0.54 0.09-0.36 0.09-0.63v-1.89q-0.09-2.88-2.16-4.95t-4.95-2.07h-6.66z" />
            </g>
          </svg>
        </a>

        <div id="fullpage">
          <div className="section">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 my-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div
                          style={{
                            display: 'inline-block',
                            width: '30px',
                            height: '0.5px',
                            borderStyle: 'solid',
                            borderColor: 'white',
                            borderTop: 'none',
                            borderLeft: 'none',
                            borderRight: 'none',
                          }}
                        />
                        <div>
                          <p
                            style={{
                              color: 'white',
                              fontSize: '15px',
                              marginBottom:
                                '-20px',
                              fontFamily:
                                'Open Sans Condensed, sans-serif',
                            }}
                          >
                            NIT Kurukshetra
                          </p>
                        </div>
                        <span
                          style={{
                            color: 'white',
                            fontSize: '80px',
                            fontFamily:
                              'Anton, sans-serif',
                          }}
                          id="obscura-text"
                        >
                          Obscura 5.5
                        </span>
                        <br />
                        <span
                          style={{
                            color: 'white',
                            fontSize: '20px',
                          }}
                        >
                          An Online crypthunt
                        </span>
                      </div>
                    </div>
                    <hr />
                    <div className="row login-row">
                      <Login />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div id="spinning-circle">
                    <img
                      src="images/logo2.svg"
                      height="100%"
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1
                    style={{
                      fontFamily: 'Anton, sans-serif',
                      color: 'white',
                    }}
                  >
                    Rules.
                  </h1>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-12">
                  <div className="card p-2 my-3">
                    #1 loreum ipsum dolor sit
                  </div>
                  <div className="card p-2 my-3">
                    #1 loreum ipsum dolor sit
                  </div>
                  <div className="card p-2 my-3">
                    #1 loreum ipsum dolor sit
                  </div>
                  <div className="card p-2 my-3">
                    #1 loreum ipsum dolor sit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
