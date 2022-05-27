import { useModal } from "../../store/ModalContextProvider";
import CartModal from "../body/CartModal";
import CheckoutModal from "../body/CheckoutModal";
import Navbar from "../body/Navbar"
import CartIcon from "../molecules/CartIcon";
import Logo from "../molecules/Logo";
import MobileNav from "../molecules/MobileNav";

function Header() {
  const { cartOpen, checkoutOpen } = useModal();
  return (
    <>
      {cartOpen && <CartModal />}
      {checkoutOpen && <CheckoutModal />}
      <header className="header">
        <div className="wrapper">
          <div className="header_content">
            <div className="header_navbar">
              <Navbar />
            </div>
            <div className="header_mobile-nav">
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header