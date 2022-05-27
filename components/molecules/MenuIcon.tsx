import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { isNavOpen, toggleNav } from "../../store/NavSlice";


function MenuIcon() {
  const navOpen = useSelector(isNavOpen)
  const dispatch = useDispatch()
  return (
    <div className="menu-icon" onClick={() => dispatch(toggleNav())}>
      {navOpen ? (
        <Image
          src="/images/shared/tablet/icon-close-menu.svg"
          width={16}
          height={15}
          alt="close icon"
        />
      ) : (
        <Image
          src="/images/shared/tablet/icon-hamburger.svg"
          width={16}
          height={15}
          alt="hamburger"
        />
      )}
    </div>
  );
}
export default MenuIcon