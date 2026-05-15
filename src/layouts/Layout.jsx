import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
