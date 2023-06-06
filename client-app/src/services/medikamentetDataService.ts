import axios, { AxiosResponse } from "axios";
import {Medikamenti} from "../types/Medikamenti";
import { variables } from "../Variables";

axios.defaults.baseURL = variables.API_URL;
axios.defaults.timeout = 10 * 1000; 
axios.defaults.timeoutErrorMessage = 'Request timed out';
axios.defaults.headers.common = {
	'X-Requested-With': 'XMLHttpRequest'
};

const getAllMedikamentet = (): Promise<AxiosResponse<Medikamenti[]>> =>{
	return axios.get('/medicaments');
};

const getMedikamenti = (medikamentetId: number): Promise<AxiosResponse<Medikamenti>> => {
	return axios.get('/medicaments/' + medikamentetId);
};

const addMedikamenti = (medikament: Medikamenti): Promise<AxiosResponse<number>> => {
	return axios.post('/medicaments', medikament);
}

const updateMedikamenti = (medikament: Medikamenti): Promise<AxiosResponse<number>> => {
	return axios.put('/medicaments',medikament);
}

const deleteMedikamenti = (medikamentetId: number): Promise<AxiosResponse<number>> => {
	return axios.delete('/medicaments/'+ medikamentetId);
};


export {getMedikamenti, getAllMedikamentet,addMedikamenti,updateMedikamenti,deleteMedikamenti};


