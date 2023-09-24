import React from "react";

import Features from "../components/HomePage/Features";
import Hero from "../components/HomePage/Hero";
import Layout from "../components/Layout/Layout";

interface HomeProps {
  handleOpenModal: any;
}

const Home: React.FC<HomeProps> = ({ handleOpenModal }) => {
  document.title = "Argent Bank - Home";

  return (
    <Layout handleOpenModal={handleOpenModal}>
      <Hero />
      <Features />
    </Layout>
  );
};

export default Home;
