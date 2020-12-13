import axios from 'axios';

export const API_URL = 'http://ec2-3-139-229-32.us-east-2.compute.amazonaws.com/';
// export const API_URL = 'http://localhost:80/';

axios.defaults.baseURL = API_URL;
axios.defaults.timeout = 10000;

const getFilterList = () => {
  return axios.get('api/filters');
}

const getJobs = (filter) => {
  return axios.post('api/jobs', {filter: filter});
}

export {
  getFilterList,
  getJobs
}