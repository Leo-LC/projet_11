import React from "react";

import Features from "../components/Features";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

export default function Home() {

  document.title = "Argent Bank - Home";
  return (
    <Layout>

        <Hero />
        <Features />

    </Layout>
  );
}
