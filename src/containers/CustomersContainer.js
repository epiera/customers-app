import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from './../components/AppFrame';
import CustomersList from './../components/CustomersList';
import CustomersActions from '../components/CustomersActions';
import { fetchCustomers } from './../actions/fetchCustomers';

const customers = [
  {
    "dni": "27000000",
    "name": "Juan Perez",
    "age": 37
  },
  {
    "dni": "30000000",
    "name": "Paco Martinez",
    "age": 15
  },
  {
    "dni": "33000000",
    "name": "Pedro Gonzalez",
    "age": 67
  }
];

class CustomerContainer extends Component {
  
  componentDidMount() {
    this.props.fetchCustomers();
  }
  

  handleAddNew = () => {
    this.props.history.push('/customers/new');
  }

  renderBody = customers => (
    <div>
      <CustomersList
        customers={customers}
        urlPath={'customers/'}>
      </CustomersList>
      
      <CustomersActions>
        <button onClick={this.handleAddNew}>Nuevo</button>
      </CustomersActions>
    </div>
  );

  render() {
    return (
      <div>
        <AppFrame
          header={'Listado de clientes'}
          body={this.renderBody(customers)}
          >
        </AppFrame>
      </div>
    );
  }
}

CustomerContainer.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
  {
    fetchCustomers: () => dispatch(fetchCustomers())
  }
)

export default withRouter(connect(null, mapDispatchToProps)(CustomerContainer));