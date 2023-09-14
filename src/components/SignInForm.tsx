import React, { useState, useEffect } from "react";
import { logIn, fetchProfile } from "../utils/user/userSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useNavigate } from "react-router-dom";

export default function SignInForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //Déstructuration de l'objet formData pour passer les valeurs à l'API
  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.id);
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

  // Si l'utilisateur est connecté, on fetch son profil
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchProfile());
    }
  }, [isAuthenticated]);

  // Si le profil est chargé, on redirige l'utilisateur vers son profil
  useEffect(() => {
    if (userId) {
      navigate(`/profile/${userId}`);
    }
  }, [userId]);

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
        dispatch(logIn(formData));
      } catch (error) {
        console.log(error);
      }
    }
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
        />

        <label htmlFor='remember-me'>Remember me</label>
      </div>
      <button className='sign-in-button'>Sign In</button>
    </form>
  );
}

/* 
TODO 

: afficher un message d'erreur à l'utilisateur
: handle "remember me"
 */
