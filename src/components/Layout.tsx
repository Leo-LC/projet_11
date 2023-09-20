import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className='grid gap-4'>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
