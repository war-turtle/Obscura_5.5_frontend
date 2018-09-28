import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  withRouter,
} from 'react-router-dom';
import actions from '../../actions';

class LevelView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ans: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { postAns } = this.props;
    const alias = this.props.match.params.alias;
    postAns(this.state, alias);
    this.setState({ ans: '' });
  }

  render() {
    const { ans } = this.state;
    const { name, html, picture } = this.props;
    return (
      <div className="row">
        <div className="col s12">
          <h3 align="center" className="regular">
            {name}
          </h3>
          <div className="row center-align">
            <div className="col s12 m8 offset-m2 l8 offset-l2">
              <div className="row center">
                <div id="insert" dangerouslySetInnerHTML={{ __html: html }} />
              </div>
              {
                picture.map(p => (<img key={p} className="responsive-img" src={p} width="50%" alt="level images" />))
              }
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <form onSubmit={this.handleSubmit} id="myform">
                <div className="input-field inline">
                  <input id="ans" type="text" value={ans} className="validate" name="ans" onChange={this.onChange} />
                  <label htmlFor="ans">
                    Type your Ans
                  </label>
                </div>
                <button className="btn waves-effect waves-light" id="submit" type="submit" name="action">
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
    );
  }
}

LevelView.propTypes = {
  postAns: () => null,
  name: PropTypes.string,
  html: PropTypes.string,
  picture: PropTypes.arrayOf(PropTypes.string),
};


LevelView.defaultProps = {
  name: '',
  html: '',
  picture: [],
  postAns: () => null,
};

const mapStateToProps = (state, ownProps) => ({
  ansCheck: state.level.ansCheck,
  nextalias: state.level.nextalias,
  errormsg: state.level.error,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  postAns: (ans, alias) => {
    dispatch(actions.postAns(ans, alias));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LevelView));
