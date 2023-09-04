import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {authentication} from "../utils/authentication";

export default function SignInForm() {
    
const [formData, setFormData] = useState({
    username: "",
    password: "",
});
    
const { username, password } = formData;

const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
        ...formData,
        [e.target.id]: e.target.value,
    });
};
const navigate = useNavigate();

const handleFormSubmission = async (e : React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
        const response = await authentication.signIn(username, password);
        if(response.status === 200) {
            console.log("success");
            return navigate("/profile");
         
            
        }
        else if (response.status === 400) {
            console.log("echec mais ça fonctionne");
        }
    } catch (error) {
        console.log("error in the handleFormSubmission function");
    }
}
/* 
TODO : afficher un message d'erreur à l'utilisateur
TODO : stocker le token dans le local storage
     : stocker le user dans le context
     : rediriger vers une page dynamique (profil) 
 */

    return(
        <form>
            <div className="input-wrapper">
              <label htmlFor="username">Adresse Mail</label>
              <input type="text" id="username" value={username} onChange={handleChange} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={handleChange}/>
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me"/>
              {/* TODO : store values if remember me is checked */}
              <label htmlFor="remember-me" >Remember me</label>
            </div>
       <button className="sign-in-button" onClick={handleFormSubmission}>Sign In</button>
          </form>
    )
}
