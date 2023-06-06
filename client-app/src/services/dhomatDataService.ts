import axios, { AxiosResponse } from "axios";
import Dhoma from "../types/Dhoma";
import { variables } from "../Variables";

axios.defaults.baseURL = variables.API_URL;
axios.defaults.timeout = 10 * 1000; 
axios.defaults.timeoutErrorMessage = 'Request timed out';
axios.defaults.headers.common = {
	'X-Requested-With': 'XMLHttpRequest'
};

const getAllDhomat = (): Promise<AxiosResponse<Dhoma[]>> =>{
	return axios.get('/dhoma');
};

const getDhomat = (id: number): Promise<AxiosResponse<Dhoma>> => {
	return axios.get('/dhoma/' + id);
};

const addDhomat = (dhoma: Dhoma): Promise<AxiosResponse<number>> => {
	return axios.post('/dhoma',dhoma);
}

const updateDhomat = (dhoma: Dhoma): Promise<AxiosResponse<number>> => {
	return axios.put('/dhoma',dhoma);
}

const deleteDhomat = (id: number): Promise<AxiosResponse<number>> => {
	return axios.delete('/dhoma/'+ id);
};


export {getDhomat, getAllDhomat,addDhomat,updateDhomat,deleteDhomat};
