import axios, { AxiosResponse } from "axios";
import Qyteti from "../types/Qyteti";
import { variables } from "../Variables";

axios.defaults.baseURL = variables.API_URL;
axios.defaults.timeout = 10 * 1000; 
axios.defaults.timeoutErrorMessage = 'Request timed out';
axios.defaults.headers.common = {
	'X-Requested-With': 'XMLHttpRequest'
};

const getAllQytetet = (): Promise<AxiosResponse<Qyteti[]>> =>{
	return axios.get('/qyteti/');
};

const getQyteti = (qytetiId: number): Promise<AxiosResponse<Qyteti>> => {
	return axios.get('/qyteti/' + qytetiId);
};

const addQyteti = (qyteti: Qyteti): Promise<AxiosResponse<number>> => {
	return axios.post('/qyteti',qyteti);
}

const updateQyteti = (qyteti: Qyteti): Promise<AxiosResponse<number>> => {
	return axios.put('/qyteti',qyteti);
}

const deleteQyteti = (qytetiId: number): Promise<AxiosResponse<number>> => {
	return axios.delete('/qyteti/'+ qytetiId);
};


export {getQyteti, getAllQytetet,addQyteti,updateQyteti,deleteQyteti};


