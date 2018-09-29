import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import actions from '../../actions';

class Requests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render = () => {
    const {
      requests, acceptRequest, deleteRequest, socket,
    } = this.props;
    if (requests.length) {
      return (
        <div className="request-back">
          <h5>
            Team Requests
          </h5>

          <div className="card z-index-4">

            <ul className="collapsible">
              <li>
                <div className="collapsible-header grey darken-3 white-text">
                  <i className="material-icons ">
                    face
                  </i>
                  Requests (
                  {requests.length}
                  )
                </div>
              </li>
            </ul>
            <table className="highlight centered responsive-table">
              <thead>
                <tr>
                  <th>
                  Avatar
                  </th>
                  <th>
                  Username
                  </th>
                  <th />
                  <th />
                </tr>
              </thead>

              <tbody>
                {requests.map(t => (
                  <tr key={t.requester_id}>
                    <td>
                      <img className="responsive-img circle" src={t.picture} alt="avatar" width="45" />
                    </td>
                    <td>
                      {t.username}
                    </td>
                    <td>
                      <i className="material-icons select-pointer" onClick={() => { acceptRequest(t.requester_id, socket); }}>
                      check
                      </i>
                    </td>
                    <td>
                      <i className="material-icons select-pointer" onClick={() => { deleteRequest(t.requester_id, socket); }}>
                      cancel
                      </i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    return (
      <div>
        <h6>
          There are no team joining requests at present
        </h6>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({

});


const mapDispatchToProps = (dispatch, ownProps) => ({
  acceptRequest: (requesterId, socket) => {
    dispatch(actions.acceptRequest(requesterId, socket));
  },
  deleteRequest: (requesterId, socket) => {
    dispatch(actions.deleteRequest(requesterId, socket));
  },
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Requests));
