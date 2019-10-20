import React, { Component } from 'react';
import AppFrame from './../components/AppFrame';
import CustomersList from './../components/CustomersList';
import CustomersActions from '../components/CustomersActions';

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

  renderBody = customers => (
    <div>
      <CustomersList
        customers={customers}
        urlPath={'customer/'}>
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

};

export default CustomerContainer;