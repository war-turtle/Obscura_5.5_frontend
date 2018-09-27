import React from 'react';
import loadjs from 'loadjs';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from './form';

const $ = require('jquery');

class Onboard extends React.Component {
  constructor(props) {
    super(props);
    loadjs([
      'js/init.js',
      'js/materialize.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js',
    ]);
  }

  componentDidMount = () => {
    $('link[rel=stylesheet][href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"]').remove();
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.onboard) {
      nextProps.history('/dashboard');
    }
  };

  render() {
    const { user } = this.props;
    return (
      <div className="row center red darken-1 onboard-back">
        <div className="col s12 l8 offset-l2">
          <div className="card z-depth-5">
            <div className="card-content white-text">
              <div className="row">
                <div className="col s12">
                  <ul className="tabs">
                    <li className="tab col s12">
                      <a href="#test1">
                        Basic Details
                      </a>
                    </li>
                  </ul>
                </div>

                <div id="test1" className="col s12">
                  <Form user={user} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  onboard: state.user.onboard,
  userData: state.user.userData,
});

Onboard.propTypes = {
  history: PropTypes.func.isRequired,
  onboard: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};


export default withRouter(connect(mapStateToProps)(Onboard));
