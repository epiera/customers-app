import React from 'react';
import PropTypes from 'prop-types';

const CustomerData = ({ name, dni, age }) => {
  return (
    <div>
      <div className="customer-data">
        <h2>Datos del cliente</h2>
        <div><b>Nombre</b> <i>{name}</i></div>
        <div><b>DNI</b> <i>{dni}</i></div>
        <div><b>Edad</b> <i>{age}</i></div>
      </div>
    </div>
  );
};

CustomerData.propTypes = {
  name: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  age: PropTypes.number,
};

export default CustomerData;