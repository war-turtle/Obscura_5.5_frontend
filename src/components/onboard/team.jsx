import React from 'react';
import { connect } from 'react-redux';
import {
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import actions from '../../actions';
import Avatar from './avatar';

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      picture: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { getTeamList } = this.props;
    getTeamList();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const { createTeam } = this.props;
    createTeam(this.state);
  }

  changeAvatar = (avatar) => {
    this.setState({ picture: avatar });
    console.log(avatar);
  }

  sendRequest(id) {
    const { sendTeamRequest } = this.props;
    sendTeamRequest(id);
  }

  render() {
    const { teams } = this.props;
    const avatarName = [];
    for (let i = 2; i <= 60; i += 1) {
      avatarName.push(`/images/avatars/${i}.png`);
    }

    const { name, picture } = this.state;
    return (
      <div className="row">
        <div className="col s12 black-text">
          <table className="highlight centered responsive-table">
            <thead>
              <tr>
                <th>
                  Avatar
                </th>
                <th>
                  Team Name
                </th>
                <th>
                  Team Members
                </th>
                <th>
                  Current Level
                </th>
                <th>
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {teams.map(t => (
                <tr key={t.name}>
                  <td>
                    {t.picture}
                  </td>
                  <td>
                    {t.name}
                  </td>
                  <td>
                    {t.players.length}
                  </td>
                  <td>
                    {t.level_no}
                  </td>
                  <td>
                    <button type="submit" onClick={(event) => { event.preventDefault(); this.sendRequest(t._id); }} className="waves-effect waves-light btn">
                      Send Request
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row center">
            <div className="col s12">
              <a href="#modal1" className="btn-floating btn-large waves-effect waves-light red modal-trigger">
                <i className="material-icons">
                  add
                </i>
              </a>

              <div id="modal1" className="modal">
                <div className="modal-content">
                  <h4>
                    Create Your Own Team
                  </h4>
                  <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="name" type="text" name="name" value={name} className="validate" onChange={this.onChange} />
                          <label htmlFor="name">
                            Team name
                          </label>
                        </div>
                      </div>
                      <div className="input-field col s12">
                        <a href="#modal2" className="btn-floating btn-large modal-trigger" />
                        <div id="modal2" className="modal">
                          <div className="modal-content">
                            <h4>
                              Select your avatar
                            </h4>
                            <Avatar onSelectAvatar={this.changeAvatar} />
                          </div>
                        </div>
                      </div>
                      <button className="modal-close btn waves-effect waves-light" type="submit">
                        Submit
                        <i className="material-icons right">
                          send
                        </i>
                      </button>
                    </form>
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

Team.defaultProps = {
  getTeamList: () => null,
  sendTeamRequest: () => null,
  createTeam: () => null,
  teams: [],
};

Team.propTypes = {
  getTeamList: () => null,
  sendTeamRequest: () => null,
  createTeam: () => null,
  teams: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state, ownProps) => ({
  teams: state.teams,
  userRequests: state.user.sentRequests,
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  getTeamList: () => {
    dispatch(actions.getTeamList());
  },
  sendTeamRequest: (id) => {
    dispatch(actions.sendTeamRequest(id));
  },
  createTeam: (formData) => {
    dispatch(actions.createTeam(formData));
  },
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Team));
