import React from "react";
import { useAppSelector } from "../app/hooks";

// COMPONENTS
import Layout from "../components/Layout";
import AccountsWrapper from "../components/AccountsWrapper";
import { EditNameForm } from "../components/EditNameForm";

export default function Profile() {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const userName = useAppSelector((state) => state.user.userName);

  document.title = `Argent Bank - Compte de ${userName}`;

  return (
    <Layout mainClassName='main bg-dark'>
      {!isAuthenticated ? (
        <h1>Vous devez être connecté pour accéder à cette page</h1>
      ) : (
        <>
          <div className='header'>
            <h1>
              Welcome back
              <br />
              {userName} !
            </h1>
            <button className='edit-button'>Edit Name</button>
          </div>
          {/* TODO : Render either EditNameForm or AccountsWrapper depending on
          the button clicked */}
          <EditNameForm />
          <AccountsWrapper />
        </>
      )}
    </Layout>
  );
}
