import Axios from "axios";

const API_BASE_URL = "http://localhost:3001/api/v1";

async function signIn(email: string, password: string): Promise<any> {
  const data = {
    email,
    password,
  };
  try {
    const response = await Axios.post(`${API_BASE_URL}/user/login`, data);
    const token = response.data.body.token;
    localStorage.setItem("userToken", token);

    return response.data;
  } catch (error: any) {
    return error.response;
  }
}

const signOut = () => {
  localStorage.clear();
};

const isAuthenticated = () => {
  const token = localStorage.getItem("userToken");
  return token !== null;
};

export const authentication = {
  signIn,
  signOut,
  isAuthenticated,
};
