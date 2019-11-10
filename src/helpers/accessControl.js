import React, { Component } from 'react';
import { connect } from 'react-redux';

/* High Order Component */
export const accessControl = permissionsRequired => WrappedComponent => {
  const SecuredControl = class extends Component {
    render() {
      const { permissions } = this.props.user;

      const isAllow = permissionsRequired.every(p => permissions.indexOf(p) >= 0);


      if (!isAllow) {
        return (<div><p>Ups! Parece que no tiene permisos de acceso...</p></div>);
      }

      return <WrappedComponent {...this.props} />;
    }
  }

  return connect(state => ({ user: state.user}))(SecuredControl)
}