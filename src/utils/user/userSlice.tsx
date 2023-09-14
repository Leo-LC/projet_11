import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import { API_BASE_URL } from "../../app/constants";

//TODO [QUEST] : faut-il séparer davantage les fonctions (logIn, fetchProfile, logOut) dans des fichiers différents ?
export interface UsersState {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    id: string;
    userName: string;
  };
  isAuthenticated: boolean;
  //TODO : [LOW] : loading screen
  loading: boolean;
  error: any;
}

const initialState: UsersState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    id: "",
    userName: "",
  },
  isAuthenticated: false,
  loading: false,
  error: null,
};

// Async Thunk : gère la connexion de l'utilisateur / stockage du token dans le local storage
export const logIn = createAsyncThunk("user/logIn", async (data: any) => {
  try {
    const response = await Axios.post(`${API_BASE_URL}/user/login`, data);
    const token = response.data.body.token;
    localStorage.setItem("userToken", token);
    return;
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
    localStorage.removeItem("userToken");
    return userInformations;
  } catch (error: any) {
    console.log(error.response);
    return;
  }
});

// Gestion de la déconnexion de l'utilisateur

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut(state) {
      if (state.isAuthenticated) {
        state.isAuthenticated = false;
        state.user = initialState.user;
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
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logOut } = userSlice.actions;
export default userSlice.reducer;
