import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import Features from "../components/HomePage/Features";
import Hero from "../components/HomePage/Hero";
import Layout from "../components/Layout/Layout";
import { fetchProfile } from "../utils/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function Home() {
  document.title = "Argent Bank - Home";

  return (
    <Layout>
      <Hero />
      <Features />
    </Layout>
  );
}
