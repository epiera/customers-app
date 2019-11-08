import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from './CustomersActions';
import { Prompt } from 'react-router-dom';


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



const toNumber = value => value && Number(value);
const toUpper = value => value && value.toUpperCase();
const toLower = value => value && value.toLowerCase();
const onlyGrow = (value, previousValue, values) => 
    value && previousValue && (value > previousValue ? value : previousValue);

class CustomerEdit  extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
  }
  componentDidMount(){
    if (this.textInput.current){
      this.textInput.current.focus();
    }
  }


  renderField = ({ input, meta, type, label, name, withFocus}) => {
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <input 
          {...input} 
          type={!type ? "text" : type} 
          ref={withFocus && this.textInput }/>
          {
            meta.touched && meta.error && <span>{meta.error}</span>
          }
      </div>
    );
  };

  render () {
    const { handleSubmit, onBack, submitting, pristine, submitSucceeded } = this.props;
    return (
      <div>
        <h2>Edición del cliente</h2>
        <form onSubmit={handleSubmit}>
          <Field
            name="name"
            label="Nombre" 
            component={this.renderField}
            parse={toUpper}
            format={toLower}
            withFocus>
          </Field>
          <Field
            name="dni" 
            label="Dni" 
            component={this.renderField}>
          </Field>
          <Field
            name="age" 
            label="Edad" 
            component={this.renderField}
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