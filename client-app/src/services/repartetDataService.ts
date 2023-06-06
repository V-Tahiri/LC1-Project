import axios, { AxiosResponse } from "axios";
import Reparti from "../types/Reparti";
import { variables } from "../Variables";


axios.defaults.baseURL = variables.API_URL;
axios.defaults.timeout = 10 * 1000; /* 10 seconds */
axios.defaults.timeoutErrorMessage = 'Request timed out';
axios.defaults.headers.common = {
	'X-Requested-With': 'XMLHttpRequest'
};


const getAllRepartet = (): Promise<AxiosResponse<Reparti[]>> => {
	return axios.get('/reparti');
};

const getRepartet = (repartiId: number): Promise<AxiosResponse<Reparti>> => {
	return axios.get('/reparti/' + repartiId);
};

const addRepartet = (reparti: Reparti): Promise<AxiosResponse<number>> => {
	return axios.post('/reparti', reparti);
}

const updateRepartet = (reparti: Reparti): Promise<AxiosResponse<number>> => {
	return axios.put('/reparti', reparti);
}

const deleteRepartet = (repartiId: number): Promise<AxiosResponse<number>> => {
	return axios.delete('/reparti/' + repartiId);
};

export  { addRepartet, getAllRepartet, getRepartet, updateRepartet, deleteRepartet};