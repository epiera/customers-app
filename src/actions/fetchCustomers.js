import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';

const customers = [
  {
    "dni": "27000000",
    "name": "Juan Perez 1",
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

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers);