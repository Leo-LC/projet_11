import React from "react";
import Layout from "../components/Layout/Layout";
import SignInForm from "../components/SignIn/SignInForm";

interface SignInProps {
  handleOpenModal: any;
}
const SignIn: React.FC<SignInProps> = ({ handleOpenModal }) => {
  document.title = "Argent Bank - Sign In";

  return (
    <Layout handleOpenModal={handleOpenModal}>
      <section className='sign-in-content'>
        <i className='fa fa-user-circle sign-in-icon'></i>
        <h1>Sign In</h1>
        <SignInForm />
      </section>
    </Layout>
  );
};

export default SignIn;
