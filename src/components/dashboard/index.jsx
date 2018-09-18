import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          hello
        </div>
      </div>
    );
  }
}

export default Dashboard;
