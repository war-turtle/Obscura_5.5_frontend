import React from 'react';
import Requests from './requests';

const TeamDetails = (props) => {
  const { team } = props;
  if (team) {
    return (
      <div className="row">
        <div className="col s12">
          <div className="col s12">
            {/* <div className="card-panel indigo z-depth-1">
              <div className="row">
                <div className="col s2 valign-wrapper">
                  <img src={team.picture} alt="" className="circle responsive-img" />
                </div>
                <div className="col s10">
                  <span className="white-text">
                    <h6>
                      Team
                      {' '}
                      {team.name}
                    </h6>
                    Total Members:
                    {' '}
                    {team.players.length}
                    <br />
                    Current Level:
                    {' '}
                    {team.level_no}
                  </span>
                </div>
              </div>
            </div> */}

            <div className="row">
              <div className="col s12 center">
                <img src={team.picture} alt="" className="circle responsive-img" width="15%" />
                <h5>
                  {' '}
                  Team
                  {' '}
                  <b>
                    {team.name}
                  </b>
                </h5>
                <div className="row">
                  <div className="col s12">


                    <div className="card z-index-4">

                      <ul className="collapsible">
                        <li>
                          <div className="collapsible-header grey darken-3 white-text">
                            <i className="material-icons">
                            group
                            </i>
                          Team Members
                          </div>
                          <div className="collapsible-body">
                            <span>
                            Lorem ipsum dolor sit amet
                            </span>
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
                              Player Username
                            </th>
                            <th>
                              Level Cleared
                            </th>
                          </tr>
                        </thead>

                        {team.players.map(p => (
                          <tbody>
                            <tr>
                              <td>
                                <img src={p.picture} alt="player_avatar" width="15%" className="responsive-img circle" />
                              </td>
                              <td>
                                {p.username}
                              </td>
                              <td>
                                {p.level_cleared}
                              </td>
                            </tr>
                          </tbody>
                        ))}
                      </table>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <Requests requests={team.requests} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      loading....
    </div>
  );
};

export default TeamDetails;
