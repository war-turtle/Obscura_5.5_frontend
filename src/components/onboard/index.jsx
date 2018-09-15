import React from 'react';

const Onboard = () => (
  <div className="row">
    <div className="col s12 m6">
      <div className="card blue darken-1 z-depth-5">
        <div className="card-content white-text">
          <div className="row">
            <div className="col s12">
              <ul className="tabs">
                <li className="tab col s3">
                  <a href="#test1">
                    Test 1
                  </a>
                </li>
                <li className="tab col s3">
                  <a className="active" href="#test2">
                    Test 2
                  </a>
                </li>
                <li className="tab col s3">
                  <a href="#test3">
                    test 3
                  </a>
                </li>
              </ul>
            </div>
            <div id="test1" className="col s12">
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s6">
                      <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
                      <label htmlFor="first_name">
                        First Name
                      </label>
                    </div>
                    <div className="input-field col s6">
                      <input id="last_name" type="text" className="validate" />
                      <label htmlFor="last_name">
                        Last Name
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input disabled value="I am not editable" id="disabled" type="text" className="validate" />
                      <label htmlFor="disabled">
                        Disabled
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="password" type="password" className="validate" />
                      <label htmlFor="password">
                        Password
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="email" type="email" className="validate" />
                      <label htmlFor="email">
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      This is an inline input field:
                      <div className="input-field inline">
                        <input id="email_inline" type="email" className="validate" />
                        <label htmlFor="email_inline">
                          Email
                        </label>
                        <span className="helper-text" data-error="wrong" data-success="right">
                          Helper text
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div id="test2" className="col s12">
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s6">
                      <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
                      <label htmlFor="first_name">
                        First Name
                      </label>
                    </div>
                    <div className="input-field col s6">
                      <input id="last_name" type="text" className="validate" />
                      <label htmlFor="last_name">
                        Last Name
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input disabled value="I am not editable" id="disabled" type="text" className="validate" />
                      <label htmlFor="disabled">
                        Disabled
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="password" type="password" className="validate" />
                      <label htmlFor="password">
                        Password
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="email" type="email" className="validate" />
                      <label htmlFor="email">
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      This is an inline input field:
                      <div className="input-field inline">
                        <input id="email_inline" type="email" className="validate" />
                        <label htmlFor="email_inline">
                          Email
                        </label>
                        <span className="helper-text" data-error="wrong" data-success="right">
                          Helper text
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div id="test3" className="col s12">
              Test 3
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Onboard;
