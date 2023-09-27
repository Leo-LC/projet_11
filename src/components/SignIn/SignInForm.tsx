import React, { useState, useEffect } from "react";
import { logIn, fetchProfile } from "../../utils/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import InputWrapper from "./InputWrapper";
import { Checkbox } from "@mui/material";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  //Déstructuration de l'objet formData pour passer les valeurs à l'API
  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.id);
  const userToken = localStorage.getItem("userToken");

  // Si l'utilisateur ne s'est pas déconnecté, on le redirige vers son profil
  useEffect(() => {
    if (userToken) {
      fetchAndNavigate();
    }
  }, []);

  // Gestion des changements dans les inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Gestion de la soumission du formulaire => dispatch de l'action logIn
  const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData) {
      try {
        const response = await dispatch(logIn(formData));
        if (response.payload) {
          const token = response.payload;
          localStorage.setItem("userToken", token);
          fetchAndNavigate();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const fetchAndNavigate = async () => {
    const userToken = localStorage.getItem("userToken");
    await dispatch(fetchProfile(userToken));
    console.log(userId);

    navigate(`/profile/${userId}`);
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <InputWrapper
        label='Adresse Mail'
        type='text'
        id='email'
        value={email}
        onChange={handleChange}
      />
      <InputWrapper
        label='Password'
        type='password'
        id='password'
        value={password}
        onChange={handleChange}
      />
      <Checkbox
        checked={rememberMe}
        onChange={() => setRememberMe(!rememberMe)}
      />
      <button className='sign-in-button'>Sign In</button>
    </form>
  );
};

export default SignInForm;
