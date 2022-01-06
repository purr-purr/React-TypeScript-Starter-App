import React, { FC } from 'react';
import Header from '../layout/containers/Header';
import Footer from '../layout/containers/Footer';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
