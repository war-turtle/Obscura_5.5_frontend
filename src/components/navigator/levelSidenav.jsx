import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import actions from '../../actions';

class LevelSideNav extends React.Component {
  componentDidMount = () => {
    const { getLevelList } = this.props;
    getLevelList();
  }

  levelButtonClick = (e, l) => {
    const { history, getLevel } = this.props;
    history.push(`/level/${l.url_alias}`);
    getLevel(l.url_alias);
    this.closeLevelSidenav();
  }

  closeLevelSidenav = () => {
    $('.sidenav-overlay')[1].click();
  };

  render() {
    const { levellist } = this.props;

    if (levellist) {
      levellist.sort((a, b) => a.levelNo - b.levelNo);
    }
    return (
      <ul id="slide-out1" className="sidenav level-sidenav">
        <li className="center-align">
          <a href="#!" onClick={(e) => { e.preventDefault(); this.closeLevelSidenav(); }} className="left indigo white-text" style={{ display: 'inline-block', marginRight: '10' }}>
              X
          </a>
            LEVELS
        </li>
        <li className="divider" tabIndex="-1" />
        {
          levellist ? (
            levellist.map(l => (
              <a
                href="#!"
                key={l.levelNo}
                onClick={(e) => { e.preventDefault(); this.levelButtonClick(e, l); }}
              >
                <li>
                  <a href="#!">
                    <i className="material-icons">
                      whatshot
                    </i>
                    Level
                    {' '}
                    {l.levelNo}
                  </a>
                </li>
                <li className="divider" tabIndex="-1" />
              </a>
            ))
          ) : (
            <li>
              No levels
            </li>
          )
        }
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  levellist: state.level.levellist,
});

const mapDispatchToProps = dispatch => ({
  getLevel: (alias) => {
    dispatch(actions.getLevel(alias));
  },
  getLevelList: () => {
    dispatch(actions.getLevelList());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LevelSideNav));
