import React from 'react';
import loadjs from 'loadjs';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import $ from 'jquery';
import Form from './form';
import Team from './team';

const $ = require('jquery');

class Onboard extends React.Component {
  constructor(props) {
    super(props);
    loadjs(['js/init.js', 'js/materialize.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js']);
    this.state = {
      formTabClass: 'tab col s6',
      teamTabClass: 'tab col s6',
    };
  }

  componentDidMount = () => {
    const { user } = this.props;
    console.log(user);
    const userInfo = user ? user.user : this.props.userData;
    if (userInfo.onboard) {
      this.setState({
        formTabClass: 'tab col s6 disabled',
        teamTabClass: 'tab col s6 active',
      });
      // $('.tabs').tabs('select', '#test3');
    } else {
      this.setState({
        formTabClass: 'tab col s6 active',
      });
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.onboard) {
      this.setState({
        formTabClass: 'tab col s6 disabled',
        teamTabClass: 'tab col s6 active',
      });
    }
  }

  render() {
    const { user, history } = this.props;
    const { formTabClass, teamTabClass } = this.state;
    return (
      <div className="row center red darken-1 onboard-back">
        <div className="col s12 l8 offset-l2">
          <div className="card z-depth-5">
            <div className="card-content white-text">
              <div className="row">
                <div className="col s12">

                  <ul className="tabs">
                    <li className={formTabClass}>
                      <a href="#test1">
                        Basic Details
                      </a>
                    </li>
                    <li className={teamTabClass}>
                      <a href="#test3">
                        Teams
                      </a>
                    </li>
                  </ul>

                </div>

                <div id="test1" className="col s12">
                  <Form user={user} />
                </div>
                <div id="test3" className="col s12">
                  <Team />
                  <div className="row">
                    <div className="col s12">
                      <a className="waves-effect waves-light btn" href="#!" onClick={(e) => { e.preventDefault(); history.push('/dashboard'); }}>
                        <i className="material-icons left">
                          cloud
                        </i>
                        Continue
                      </a>
                    </div>
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

const mapStateToProps = (state, ownProps) => ({
  onboard: state.user.onboard,
  userData: state.user.userData,
});


export default withRouter(connect(mapStateToProps)(Onboard));
