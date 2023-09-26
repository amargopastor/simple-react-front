import axios from 'axios';
// const baseUrl = 'http://localhost:3001/api/notes';
// const baseUrl = 'https://amargopastor-simple-react-api-0fe8dd8f1832.herokuapp.com/api/notes';
const baseUrl = 'api/notes';

const getAll = () => {
	return axios.get(baseUrl);
};

const create = (newObject) => {
	return axios.post(baseUrl, newObject);
};

const update = (id, newObject) => {
	return axios.put(`${baseUrl}/${id}`, newObject);
};

const wipeOut = (id) => {
	return axios.delete(`${baseUrl}/${id}`);
};

const noteService = {
	getAll,
	create,
	update,
	wipeOut,
};

export default noteService;
