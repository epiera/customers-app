import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form';
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import { insertCustomer } from './../actions/insertCustomer';

class NewCustomerContainer extends Component {
  
  handleSubmit = values => {
    return this.props.insertCustomer(values).then( r => {
      if (r.error){
        throw new SubmissionError(r.payload);
      }
    });
  }

  handleSubmitSuccess = (values) =>{
    this.props.history.goBack();
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
  insertCustomer: PropTypes.func.isRequired,
};

export default withRouter(connect(null, { insertCustomer })(NewCustomerContainer));