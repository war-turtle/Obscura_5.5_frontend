import React from 'react';
// import loadjs from 'loadjs';
import Login from '../Login';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends React.Component {
  // constructor(props) {
  //   super(props);

  //   // loadjs('/js/init.js');
  // }

  render() {
    return (
      <div>

        <h1>
          Welcome to home page
        </h1>

        <Login />

      </div>
    );
  }
}

export default Home;
