import React from 'react';

class Requests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    console.log(props.requests);
  }

  render = () => {
    const { requests } = this.props;
    if (requests.length) {
      return (
        <div>
          <table className="highlight centered responsive-table">
            <thead>
              <tr>
                <th>
                  Avatar
                </th>
                <th>
                  Username
                </th>
                <th>
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {/* {teams.map(t => (
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
                      className={t.className}
                    >
                      {t.content}
                    </button>
                  </td>
                </tr>
              ))} */}
            </tbody>
          </table>
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

export default Requests;
