import React, { Component } from 'react';
import 'simplemde/dist/simplemde.min.css';

class Chat extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <div>
        <ul id="slide-out2" className="sidenav">
          <li>
            <a href="#!">
              <i className="material-icons">
                cloud
              </i>
                First Link With Icon
            </a>
          </li>
          <li>
            <a href="#!">
              Second Link
            </a>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <a className="waves-effect" href="#!">
              Third Link With Waves
            </a>
          </li>
        </ul>
        <div className="fixed-action-btn">
          <a href="#!" data-target="slide-out2" className="btn-floating btn-large green sidenav-trigger">
            <i className="large material-icons">
              contacts
            </i>
          </a>
        </div>
      </div>
    );
  }
}

export default Chat;
