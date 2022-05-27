import { ToastContainer } from "react-toastify";
import Footer from "../components/templates/Footer";
import Header from "../components/templates/Header";

function Layout({ children }: any) {
  return (
    <>
      <Header />
      {children}
      <ToastContainer bodyClassName="toastBody" limit={1} />
      <Footer />
    </>
  );
}
export default Layout;
