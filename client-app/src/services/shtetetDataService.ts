import axios, { AxiosResponse } from "axios";
import Shteti from "../types/Shteti";
import { variables } from "../Variables";


axios.defaults.baseURL = variables.API_URL;
axios.defaults.timeout = 10 * 1000; /* 10 seconds */
axios.defaults.timeoutErrorMessage = 'Request timed out';
axios.defaults.headers.common = {
	'X-Requested-With': 'XMLHttpRequest'
};


const getAllShtetet = (): Promise<AxiosResponse<Shteti[]>> => {
	return axios.get('/shteti/');
};

const getShteti = (countryId: number): Promise<AxiosResponse<Shteti>> => {
	return axios.get('/shteti/' + countryId);
};

const addShteti = (country: Shteti): Promise<AxiosResponse<number>> => {
	return axios.post('/shteti', country);
}

const updateShteti = (country: Shteti): Promise<AxiosResponse<number>> => {
	return axios.put('/shteti', country);
}

const deleteShteti = (shtetiId: number): Promise<AxiosResponse<number>> => {
	return axios.delete('/shteti/' + shtetiId);
};

export  { addShteti, getAllShtetet, getShteti, updateShteti, deleteShteti };