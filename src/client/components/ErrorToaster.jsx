import React, { Fragment, Component } from 'react';
import toastr from 'toastr';
import { connect } from 'react-redux';
import { CLEAR_ERROR } from '../store/actions/types';

class Error extends Component {
  componentDidUpdate() {
    const { error, dispatch } = this.props;
    if (error) {
      toastr.error(error);
      dispatch({ type: CLEAR_ERROR });
    }
  }

  render() {
    return (<Fragment />);
  }
}

export default connect(state => ({ error: state.error }))(Error);
