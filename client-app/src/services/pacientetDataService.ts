import axios, { AxiosResponse } from "axios";
import {Pacienti} from "../types/Pacienti";
import { variables } from "../Variables";

axios.defaults.baseURL = variables.API_URL;
axios.defaults.timeout = 10 * 1000; 
axios.defaults.timeoutErrorMessage = 'Request timed out';
axios.defaults.headers.common = {
	'X-Requested-With': 'XMLHttpRequest'
};

const getAllPacientet = (): Promise<AxiosResponse<Pacienti[]>> =>{
	return axios.get('/patients');
};

const getPacienti = (pacientiId: number): Promise<AxiosResponse<Pacienti>> => {
	return axios.get('/patients/' + pacientiId);
};

const addPacienti = (patient: Pacienti): Promise<AxiosResponse<number>> => {
	return axios.post('/patients',patient);
}

const updatePacienti = (patient: Pacienti): Promise<AxiosResponse<number>> => {
	return axios.put('/patients', patient);
}

const deletePacienti = (pacientiId: number): Promise<AxiosResponse<number>> => {
	return axios.delete('/patients/'+ pacientiId);
};


export {getPacienti, getAllPacientet, addPacienti,updatePacienti,deletePacienti};


