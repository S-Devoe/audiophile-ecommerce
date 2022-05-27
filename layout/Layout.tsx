import { ToastContainer } from "react-toastify";
import Header from "../components/templates/Header"

function Layout({children}: any) {
  return (
    <>
      <Header />
      {children}
      <ToastContainer bodyClassName="toastBody" limit={1} />
    </>
  );
}
export default Layout