import { useParams } from "react-router-dom";

import React from "react";
import Layout from "../components/Layout";
import AccountsWrapper from "../components/AccountsWrapper";

export default function Profile() {
  const { id } = useParams();

  document.title = "Argent Bank - Profile";

  return (
    <Layout mainClassName='main bg-dark'>
      <div className='header'>
        <h1>
          Welcome back
          <br />
          {id} !
        </h1>
        <button className='edit-button'>Edit Name</button>
      </div>
      <AccountsWrapper />
    </Layout>
  );
}
