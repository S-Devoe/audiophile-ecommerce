import {links} from '../../utilities/links'
import CategoryLists from './CategoryLists'
import {isNavOpen, closeNav} from '../../store/NavSlice'
import { useDispatch, useSelector } from 'react-redux'

function MobileNav() {
  const navOpen = useSelector(isNavOpen)
  const dispatch = useDispatch()

  if (navOpen){
   document.body.style.overflowY = "hidden";
   document.body.style.overflow = "hidden";
   
  } else{
    document.body.style.overflowY = "visible";
    document.body.style.overflow = "visible";
  }
  
  return (
    <nav className="mobile_nav">
      <div className={`active_mobile-nav ${navOpen ? "active" : "default"}`}>
        <ul className="mobile-nav_items" onClick={() => dispatch(closeNav())}>
          {links.slice(1).map((link) => (
            <CategoryLists {...link} key={link.id} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default MobileNav