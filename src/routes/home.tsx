import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import Features from "../components/Features";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { fetchProfile } from "../utils/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function Home() {
  document.title = "Argent Bank - Home";

  const dispatch = useAppDispatch();
  const userToken = localStorage.getItem("userToken");

  const navigate = useNavigate();

/*   useEffect(() => {
    if (userToken) {
      dispatch(fetchProfile(userToken));
    }
  }, []); */

  return (
    <Layout>
      <Hero />
      <Features />
    </Layout>
  );
}
