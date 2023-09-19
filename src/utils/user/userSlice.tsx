import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import { API_BASE_URL } from "../../app/constants";

//TODO [QUEST] : faut-il séparer davantage les fonctions (logIn, fetchProfile, logOut) dans des fichiers différents ?
export interface UserState {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  userName: string;

  isAuthenticated: boolean;
  //TODO : [LOW] : loading screen
  loading: boolean;
  error: any;
}

const initialState: UserState = {
  firstName: "",
  lastName: "",
  email: "",
  id: "",
  userName: "",

  isAuthenticated: false,
  //TODO : remplacer par status : 'idle' | 'loading' | 'succeeded' | 'failed' ?
  loading: false,
  error: null,
};

// Async Thunk : gère la connexion de l'utilisateur / stockage du token dans le local storage
export const logIn = createAsyncThunk("user/logIn", async (data: any) => {
  try {
    const response = await Axios.post(`${API_BASE_URL}/user/login`, data);
    const token = response.data.body.token;
    localStorage.setItem("userToken", token);
    return token;
  } catch (error) {
    console.log("error in logIn : " + error);
  }
});

// Async Thunk : gère la récupération des informations de l'utilisateur et les stocke dans le state
export const fetchProfile = createAsyncThunk("user/fetchProfile", async () => {
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
    return userInformations;
  } catch (error: any) {
    console.log(error.response);
    return;
  }
});

// Async Thunk : gère la modification du username de l'utilisateur
export const editUserName = createAsyncThunk(
  "user/editUsernamt",
  async (data: string) => {
    const token = localStorage.getItem("userToken");
    const response = await Axios.put(
      `${API_BASE_URL}/user/profile`,
      { userName: data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const userName = response.data.body.userName;
    return userName;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut(state) {
      if (state.isAuthenticated) {
        localStorage.removeItem("userToken");
        Object.assign(state, initialState);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProfile.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        Object.assign(state, action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editUserName.fulfilled, (state, action) => {
        state.userName = action.payload;
        state.loading = false;
        state.error = null;
      });
  },
});

export const { logOut } = userSlice.actions;
export default userSlice.reducer;
