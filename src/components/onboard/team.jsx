import React from 'react';
import { connect } from 'react-redux';
import {
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import actions from '../../actions';

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      picture: '',
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { getTeamList } = this.props;
    getTeamList();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  sendRequest(id) {
    const { sendTeamRequest } = this.props;
    sendTeamRequest(id);
  }

  createTeam() {
    const { createTeam } = this.props;
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
                    <form className="col s12" onSubmit={(e) => { e.preventDefault(); }}>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="name" type="text" name="name" className="validate" />
                          <label htmlFor="name">
                            Team name
                          </label>
                        </div>
                      </div>
                      <div className="input-field col s12">
                        <select className="icons" name="picture">
                          <option value="" disabled>
                            Choose your option
                          </option>
                          {
                            avatarName.map((i, index) => (
                              <option key={i} value={i} data-icon={i} className="left circle">
                                Avatar
                                {` ${index + 1}`}
                              </option>
                            ))
                          }
                        </select>
                        <label>
                          Images in select
                        </label>
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
