import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./../components/common/navbar";
import Footer from "./../components/footer";

const RootLayout = () => {
  return (
    <>
      <main className="bg-secondary">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default RootLayout;
