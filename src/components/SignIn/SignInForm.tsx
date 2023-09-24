import React, { useState, useEffect } from "react";
import { logIn, fetchProfile } from "../../utils/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";

export default function SignInForm() {
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
    await dispatch(fetchProfile(userToken!));
    navigate(`/profile/${userId}`);
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <div className='input-wrapper'>
        <label htmlFor='email'>Adresse Mail</label>
        <input
          type='text'
          id='email'
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className='input-wrapper'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={handleChange}
        />
      </div>
      <div className='input-remember'>
        <input
          type='checkbox'
          id='remember-me'
          onChange={() => setRememberMe(!rememberMe)}
        />
        <label htmlFor='remember-me'>Remember me</label>
      </div>
      <button className='sign-in-button'>Sign In</button>
    </form>
  );
}

// TODO : Ajouter un message d'erreur si l'authentification échoue
