import Navbar from '../header';
import Footer from '../footer';

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export const getLayout = (page) => <Layout>{page}</Layout>;
