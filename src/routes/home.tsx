import React from "react";

import Features from "../components/Features";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>

        <Hero />
        <Features />

    </Layout>
  );
}
