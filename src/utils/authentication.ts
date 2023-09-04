import Axios from "axios"
import { log } from "console";


const API_BASE_URL = 'http://localhost:3001/api/v1';

async function signIn(email: string, password: string): Promise<any> {
    const data = {
        email,
        password,
    };
    try {
        const response = await Axios.post(`${API_BASE_URL}/user/login`, data);

        return response.data;
    }
    catch (error : any) {
console.log(data);

        return(error.response);
}
}

export const authentication = {
    signIn,
};