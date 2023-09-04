import React from "react";
import Layout from "../components/Layout";
import AccountsWrapper from "../components/AccountsWrapper";

export default function Profile() {
  return (

    <Layout mainClassName="main bg-dark" >

          {/* // TODO : conditionnal rendering sign in or sign out inside the Navbar element */}
          <a className="main-nav-item" href="/">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </a>
    

        <div className="header">
          <h1>
            Welcome back
            <br />
            {/* TODO : render le nom en fonction de l'utilisateur loggé */}
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <AccountsWrapper />
     
    </Layout>
  );
}
