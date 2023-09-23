import React from "react";
import Layout from "../components/Layout/Layout";
import SignInForm from "../components/SignIn/SignInForm";

export default function SignIn() {
  document.title = "Argent Bank - Sign In";

  return (
    <Layout mainClassName='main bg-dark'>
      <section className='sign-in-content'>
        <i className='fa fa-user-circle sign-in-icon'></i>
        <h1>Sign In</h1>
        <SignInForm />
      </section>
    </Layout>
  );
}
