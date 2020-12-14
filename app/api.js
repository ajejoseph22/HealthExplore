import axios from 'axios';

// export const API_URL = 'http://ec2-3-139-229-32.us-east-2.compute.amazonaws.com/';
export const API_URL = 'http://localhost:3000/';

axios.defaults.baseURL = API_URL;

const getFilters = async () => {
	return await make('filters');
}

const getJobs = async (filter = {}) => {
	return await make('jobs', {
		filter,
	});
}

const make = async (method, params = {}) => {
	let response = await axios.get(`api/${ method }`, params);
	return response.data;
}

export {
	getFilters,
	getJobs
}