import React from 'react';
import { connect } from 'react-redux';
import {
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import actions from '../../actions';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  openCurrentLevel = () => {
    const { getCurrentLevelAlias } = this.props;
    getCurrentLevelAlias();
    console.log('hi');
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <li>
          <div className="user-view">
            <div className="background">
              <img src="/images/office.jpg" alt="background" />
            </div>
            <a href="#user">
              <img className="circle" src={user.user.picture} alt="user" />
            </a>
            <a href="#name">
              <span className="white-text name">
                {user.user.name}
              </span>
            </a>
            <a href="#email">
              <span className="white-text email">
                {user.user.email}
              </span>
            </a>
          </div>

        </li>
        <li>
          <a className="waves-effect" href="#!">
            <i className="material-icons">
              cloud
            </i>
            Dashboard
          </a>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <a className="waves-effect" onClick={this.openCurrentLevel}>
            <i className="material-icons">
              cloud
            </i>
            Arena
          </a>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <a className="waves-effect" href="#!">
            <i className="material-icons">
              cloud
            </i>
            Our Team
          </a>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <a className="waves-effect" href="#!">
            <i className="material-icons">
              cloud
            </i>
            Support
          </a>
        </li>
        <li>
          <div className="divider" />
        </li>
      </div>
    );
  }
}

Navigation.propTypes = {
  // user: PropTypes.objectOf(PropTypes.string),
};


Navigation.defaultProps = {
  user: {},
};

const mapStateToProps = (state, ownProps) => ({
  onboard: state.user.onboard,
  loggedin: state.user.loggedin,
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  getCurrentLevelAlias: () => {
    dispatch(actions.getAlias());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));
