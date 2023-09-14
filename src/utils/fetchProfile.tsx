import Axios from "axios";

const API_BASE_URL = "http://localhost:3001/api/v1";

async function fetchProfile(): Promise<any> {
  const token = localStorage.getItem("userToken");

  try {
    const response = await Axios.post(
      `${API_BASE_URL}/user/profile`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const userInformations = response.data.body;
    console.log(userInformations);

    return userInformations;

  } catch (error: any) {
    console.log(error.response);
    return ;
  }
}

export default fetchProfile;
