import React from "react";
import { useAppSelector } from "../app/hooks";

// COMPONENTS
import Layout from "../components/Layout";
import AccountsWrapper from "../components/Accounts/AccountsWrapper";
import { EditNameForm } from "../components/EditNameForm/EditNameForm";

export default function Profile() {
  const userToken = useAppSelector((state) => state.user.userToken);
  const userName = useAppSelector((state) => state.user.userName);

  document.title = `Argent Bank - Compte de ${userName}`;

  return (
    <Layout>
      {!userToken ? (
        <h1>Vous devez être connecté pour accéder à cette page</h1>
      ) : (
        <>
          <div className='header'>
            <h1>
              Welcome back
              <br />
              {userName} !
            </h1>
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
