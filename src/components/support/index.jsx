import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../../actions';

class Support extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

	render =() => (
  <div>
    <div className="row center">
      <div className="col s12 m10 offset-m1 l8 offset-l2">
        <div className="card z-index-5">
					Suppoor

        </div>
      </div>
    </div>
  </div>
	)
}

const mapStateToProps = state => ({
  messageSent: state.messageSent,
});

const mapDispatchToProps = dispatch => ({
  sendMessage: (formData) => {
    dispatch(actions.sendMessage(formData));
  },
});

Support.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Support);
