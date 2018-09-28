import React from 'react';
import Requests from './requests';

const TeamDetails = (props) => {
  const { team } = props;
  if (team) {
    return (
      <div className="row">
        <div className="col s12">
          <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="card-panel indigo z-depth-1">
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
