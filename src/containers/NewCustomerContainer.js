import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';

class NewCustomerContainer extends Component {
  
  handleSubmit = () => {
    
  }

  handleSubmitSuccess = () =>{
    
  }

  handleOnBack = () =>{
    this.props.history.goBack();
  }

  renderBody = () => {
    const newCustomer = {
      "id": "",
      "dni": "",
      "name": "",
      "age": 0

    };

    return <CustomerEdit { ...newCustomer }
              onSubmit={this.handleSubmit}
              onSubmitSuccess={this.handleSubmitSuccess} 
              onBack={this.handleOnBack} />
  }

  render() {
    return (
      <div>
        <AppFrame 
          header={`Creación del cliente`}
          body={this.renderBody()}>
        </AppFrame>
      </div>
    );
  }
}

NewCustomerContainer.propTypes = {

};

export default withRouter(connect(null, null)(NewCustomerContainer));