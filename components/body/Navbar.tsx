import { useModal } from "../../store/ModalContextProvider";
import CartIcon from "../molecules/CartIcon"
import Logo from "../molecules/Logo";
import MenuIcon from "../molecules/MenuIcon";
import CartModal from "./CartModal";
import NavLinks from "./NavLinks"

function Navbar() {
  
  return (
    <div className="navbar">
      <div className="navbar_menu-icon">
        <MenuIcon />
      </div>
      <div className="navbar_logo">
        <Logo />
      </div>
      <div className="navbar_navlinks">
        <NavLinks />
      </div>
      <div className="navbar_carticon">
        <CartIcon />
      </div>
      
    </div>
  );
}
export default Navbar