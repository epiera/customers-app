import React from 'react';
import PropTypes from 'prop-types';
import { accessControl } from './../helpers/accessControl';
import CustomerListItem from './CustomerListItem';
import { CUSTOMER_LIST } from '../constants/permissions';

const CustomersList = ({ customers, urlPath }) => {
  return (
    <div>
      <div className="customers-list">
        {
          customers.map( c =>
            <CustomerListItem
              key={c.dni}
              dni={c.dni}
              name={c.name}
              editAction={'Editar'}
              delAction={'Eliminar'}
              urlPath={urlPath}>
            </CustomerListItem>
          )
        }
      </div>
    </div>
  );
};

CustomersList.propTypes = {
  customers: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default accessControl([CUSTOMER_LIST])(CustomersList);