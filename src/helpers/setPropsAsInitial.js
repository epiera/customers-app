import React, { Component } from 'react';


/* High Order Component */
export const setPropsAsInitial = WrappedComponent => (
  class extends Component {
    render () {
      return <WrappedComponent {...this.props} initialValues={this.props} enableReinitialize />;
    }
  }
)