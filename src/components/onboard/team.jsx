import React from 'react';
import { connect } from 'react-redux';
import {
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import actions from '../../actions';
import Avatar from './avatar';
import sweetAlert from '../sweetAlert';

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      picture: '',
      secretKey: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { getTeamList } = this.props;
    getTeamList();
  }

  componentWillReceiveProps = (nextProps) => {
    nextProps.teams.map((t) => {
      nextProps.userRequests.map((i) => {
        if (i === t._id) {
          t.className = 'waves-effect waves-light btn disabled';
          t.content = 'Sent';
        } else {
          t.className = 'waves-effect waves-light btn';
          t.content = 'Send Request';
        }
      });
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.picture == '') {
      sweetAlert('Please Select An Avatar', 'error');
    } else {
      const { createTeam } = this.props;
      createTeam(this.state);
    }
  }

  changeAvatar = (avatar) => {
    this.setState({ picture: avatar });
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

    const { name, picture, secretKey } = this.state;
    return (
      <div className="row">
        <div className="col s12 black-text">
          <h6>
            Create/Join a Team
          </h6>
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
                    <img className="responsive-img" src={t.picture} alt="avatar" width="45" />
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
                    <button
                      type="submit"
                      onClick={(event) => { event.preventDefault(); this.sendRequest(t._id); }}
                      className={t.className ? t.className : 'waves-effect waves-light btn'}
                    >
                      {t.content ? t.content : 'Send Request'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row center">
            <div className="col s12">
              <a href="#modal1" className="btn-floating btn-large waves-effect waves-light red modal-trigger create-team-button">
                <i className="material-icons">
                  add
                </i>
              </a>

              <div id="modal1" className="modal">
                <div className="modal-content">
                  <h4>
                    Create Your Own Team
                  </h4>
                  <div className="input-field col s12">
                    <div className="row">
                      <img src={picture} className="circle responsive-img" alt="img" width="100" />
                    </div>
                    <a className="waves-effect waves-light btn modal-trigger" href="#modal2">
                      <i className="material-icons left">
                        cloud
                      </i>
                      Choose your Avatar
                    </a>
                    <div id="modal2" className="modal">
                      <div className="modal-content">
                        <h4>
                          Select your Team avatar
                          {/* <i href="#modal1" className="material-icons right modal-close">
                            cancel
                          </i> */}
                        </h4>
                        <Avatar onSelectAvatar={this.changeAvatar} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="name" type="text" name="name" value={name} className="validate" onChange={this.onChange} required />
                          <label htmlFor="name">
                            Team name
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="secret" type="text" name="secretKey" value={secretKey} className="validate" onChange={this.onChange} required />
                          <label htmlFor="secret">
                            Team Secret Key
                          </label>
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

const mapStateToProps = state => ({
  teams: state.teams,
  userRequests: state.user.sentRequests,
});


const mapDispatchToProps = dispatch => ({
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
