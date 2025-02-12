import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  useEffect(() => {
    // You can add any global initialization here
  }, []);

  return (
    <div className="site-wrapper">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;