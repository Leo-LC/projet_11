import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";


interface LayoutProps {
    children: React.ReactNode;
    mainClassName?: string;
}

function Layout({ children, mainClassName }: LayoutProps) {
    return (
        <>
            <Navbar />
            <main className={mainClassName}>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;