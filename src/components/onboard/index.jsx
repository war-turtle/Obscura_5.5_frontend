import React from 'react';
import loadjs from 'loadjs';
import Form from './form';
import Team from './team';

class Onboard extends React.Component {
  constructor() {
    super();
    loadjs('/js/init.js');
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card z-depth-5">
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
                      <a href="#test3">
                        test 3
                      </a>
                    </li>
                  </ul>

                </div>

                <div id="test1" className="col s12">
                  <Form />
                </div>
                <div id="test3" className="col s12">
                  <Team />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Onboard;
