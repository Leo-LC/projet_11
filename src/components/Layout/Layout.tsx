import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
  handleOpenModal: any;
};

const Layout: React.FC<LayoutProps> = ({ children, handleOpenModal }) => {
  return (
    <>
      <Navbar handleOpenModal={handleOpenModal} />
      <main className='grid gap-4'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
