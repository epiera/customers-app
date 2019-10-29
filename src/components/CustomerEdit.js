import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from './CustomersActions';
import { Prompt } from 'react-router-dom';


/*
const isRequired = value => (
  !value && "Este campo es requerido"
);
*/

/* Field validacion (has priority over global)*/
const isNumber = value => (
  isNaN(Number(value)) && "El campo debe ser un número"
);

/* Global validation */
const validate = values => {
  const errors = {};

  if (!values.name){
    errors.name = "El campo nombre es requerido";
  }

  if (!values.dni){
    errors.dni = "El campo dni es requerido";
  }

  return errors;
}

const MyField = ({ input, meta, type, label, name}) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input {...input} type={!type ? "text" : type} />
    {
      meta.touched && meta.error && <span>{meta.error}</span>
    }
    <span></span>
  </div>
)

const toNumber = value => value && Number(value);
const toUpper = value => value && value.toUpperCase();
const toLower = value => value && value.toLowerCase();
const onlyGrow = (value, previousValue, values) => 
    value && previousValue && (value > previousValue ? value : previousValue);

const CustomerEdit = ({ name, dni, age, handleSubmit, onBack, submitting, pristine, submitSucceeded }) => {
  return (
    <div>
      <h2>Edición del cliente</h2>

      <form onSubmit={handleSubmit}>
        <Field
          name="name"
          label="Nombre" 
          component={MyField}
          parse={toUpper}
          format={toLower}>
        </Field>
        <Field
          name="dni" 
          label="Dni" 
          component={MyField}>
        </Field>
        <Field
          name="age" 
          label="Edad" 
          component={MyField} 
          type="number"
          parse={toNumber}
          validate={isNumber}
          _normalize={onlyGrow}>
        </Field>
        <CustomersActions>
          <button type="submit" disabled={pristine || submitting}>Aceptar</button>
          <button type="button" disabled={submitting} onClick={onBack}>Cancelar</button>
        </CustomersActions>
        <Prompt
          when={ !pristine && !submitSucceeded }
          message="Se perderán los datos si continúa">

        </Prompt>
      </form>
    </div>
  );
};

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
  onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm(
  { 
    form: 'CustomerEdit',
    validate
  }
)(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);