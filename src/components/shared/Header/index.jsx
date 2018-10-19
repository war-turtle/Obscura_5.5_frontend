import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
  let pathName = '';
  const { history, loading } = props;
  const path = history.location.pathname;
  if (path.includes('dashboard')) {
    pathName = 'Dashboard';
  } else if (path.includes('leaderboard')) {
    pathName = 'Leaderboard';
  } else if (path.includes('support')) {
    pathName = 'Support';
  } else if (path.includes('level')) {
    pathName = 'Arena';
  } else if (path.includes('our-team')) {
    pathName = 'Our Team';
  } else if (path.includes('team')) {
    pathName = 'Team Page';
  } else {
    pathName = '';
  }

  console.log(path, pathName);
  return (
    <div className="head">
      <nav>
        <div className="nav-wrapper grey darken-3">
          <a href="#!" className="breadcrumb" />
          <a href="#!" className="breadcrumb">
            {pathName}
          </a>
          <a href="#!" className="brand-logo right">
            <img
              src="images/logo2.svg"
              width="75"
              alt="logo"
            />
          </a>
        </div>
      </nav>
      <div className={loading ? 'progress grey lighten-4' : 'progress grey lighten-4 hide'}>
        <div className="indeterminate grey" />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.loading,
});


export default connect(mapStateToProps)(Header);
