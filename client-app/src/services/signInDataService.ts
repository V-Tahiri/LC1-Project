import axios, { AxiosResponse } from "axios";
import AppUser from "../types/AppUser";
import SignIn from "../types/SignIn";
import { variables } from "../Variables";

axios.defaults.baseURL = variables.API_URL;
axios.defaults.timeout = 10 * 1000; 
axios.defaults.timeoutErrorMessage = 'Request timed out';
axios.defaults.headers.common = {
	'X-Requested-With': 'XMLHttpRequest'
};

let appUser : AppUser = {} as AppUser;

const verifyLogIn = (signIn: SignIn) :  Promise<AxiosResponse<AppUser>> => {
	return axios.post('/login',signIn);

	 
}
const setUser =(user : AppUser)  => {
	appUser = user;
}
const getUser = () => {
	return appUser;
}

export {setUser, verifyLogIn, getUser};
