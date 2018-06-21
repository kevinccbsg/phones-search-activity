import axios from 'axios';

const GET_PHONES = 'GET_PHONES';
const getPhones = () => (
  {
    type: GET_PHONES,
    payload: axios.get('/api/phones'),
  }
);

export {
  GET_PHONES,
  getPhones,
}
