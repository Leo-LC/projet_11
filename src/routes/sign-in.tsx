import React from "react";
import Layout from "../components/Layout";
import SignInForm from "../components/SignInForm";

export default function SignIn() {
  return (
    <Layout mainClassName="main bg-dark" >
    

        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <SignInForm />
        </section>


    </Layout>
  );
}
