import React from 'react';
import {
  withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LevelView from './levelView';
import Twitter from './twitter';
import actions from '../../actions';
import SweetAlert from '../sweetAlert';

const jwtDecode = require('jwt-decode');

class Level extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      picture: '',
      alias: '',
      html: '',
    };
    const { socket } = props;
    socket.emit('checkUser', jwtDecode(sessionStorage.getItem('jwtToken')).user);
  }

  componentDidMount = () => {
    const { getLevel } = this.props;
    const alias = this.props.match.params.alias;
    getLevel(alias);
  }

  componentWillReceiveProps = (nextProps) => {
    const { nextalias } = this.props;
    this.setState({
      name: nextProps.level.name,
      picture: nextProps.level.picture,
      alias: nextProps.level.alias,
      html: nextProps.level.html,
    });

    if (nextProps.nextalias !== nextalias && nextProps.nextalias !== '' && nextProps.ansCheck) {
      SweetAlert('Congratulations', 'success');
      const { history } = this.props;
      history.push(`/level/${nextProps.nextalias}`);
      const { getLevel, getLevelList } = this.props;
      getLevel(nextProps.nextalias);
      getLevelList();
      this.setState({
        name: '',
        picture: '',
        alias: '',
        html: '',
      });
    } else {
      // eslint-disable-next-line
      eval(nextProps.level.js)
    }
  }

  render() {
    const {
      name, picture, html, alias,
    } = this.state;
    if (name !== '') {
      return (
        <div className="row">
          <div className="col s12">
            <div className="row">
              <div className="col s12 m12 l8 center">
                <LevelView
                  name={name}
                  picture={picture}
                  alias={alias}
                  html={html}
                />
              </div>
              <div className="col l4">
                <div className="row hide-on-med-and-down">
                  <div className="col s12">
                    <Twitter />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="row">
        <div className="col s2 offset-s5 loader">
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle" />
              </div>
              <div className="gap-patch">
                <div className="circle" />
              </div>
              <div className="circle-clipper right">
                <div className="circle" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Level.propTypes = {
  // match: PropTypes.string,
  getLevel: () => null,
  alias: PropTypes.string,
  name: PropTypes.string,
  html: PropTypes.string,
  ansCheck: PropTypes.bool,
  nextalias: PropTypes.string,
  picture: PropTypes.arrayOf(PropTypes.string),
  level: PropTypes.objectOf(PropTypes.string),
  history: () => null,
};


Level.defaultProps = {
  ansCheck: false,
  name: '',
  html: '',
  picture: [],
  getLevel: () => null,
  alias: '',
  nextalias: '',
  level: {},
  history: () => null,
  // match: '',
};

const mapStateToProps = (state, ownProps) => ({
  level: state.level,
  nextalias: state.level.nextalias,
  ansCheck: state.level.ansCheck,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getLevel: (alias) => {
    dispatch(actions.getLevel(alias));
  },
  getLevelList: () => {
    dispatch(actions.getLevelList());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Level));
