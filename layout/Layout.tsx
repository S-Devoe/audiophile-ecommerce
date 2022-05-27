import { ToastContainer } from "react-toastify";
import Footer from "../components/templates/Footer";
import Header from "../components/templates/Header"

function Layout({children}: any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ToastContainer bodyClassName="toastBody" limit={1} />
    </>
  );
}
export default Layout