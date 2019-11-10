import { combineReducers } from 'redux';
import { customers } from './customers';
import { reducer as reduxForm } from 'redux-form';
import { CUSTOMER_LIST, CUSTOMER_VIEW, CUSTOMER_EDIT } from './../constants/permissions';

/*
  Esta funcionalidad debería contemplar un login (form),
  actionsCreators, reducer y navegación
*/
const user = (state, action) => ({permissions: [CUSTOMER_VIEW]});

// const user = (state, action) => ({permissions: []});
// const user = (state, action) => ({permissions: [CUSTOMER_LIST]});
// const user = (state, action) => ({permissions: [CUSTOMER_LIST, CUSTOMER_VIEW]});
// const user = (state, action) => ({permissions: [CUSTOMER_LIST, CUSTOMER_VIEW, CUSTOMER_EDIT]});

export default combineReducers({
  customers,
  form: reduxForm,
  user
});