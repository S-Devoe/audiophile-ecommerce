import Image from "next/image"
import { useState } from "react"
import { useSelector } from "react-redux"
import { totalQuantity } from "../../store/CartSlice"
import { useModal } from "../../store/ModalContextProvider"
import CartModal from "../body/CartModal"

function CartIcon(): JSX.Element{
    const quantity = useSelector(totalQuantity)
    const {handleShowCart} = useModal()


  return (
    <div className="cart_icon">
      <div className="button" onClick={handleShowCart}>
        <Image
          src="/images/shared/desktop/icon-cart.svg"
          width={23}
          height={21}
          alt="cart icon"
        />
        {!!quantity && <div className="cart_number">{quantity}</div>}
      </div>
    </div>
  );
}
export default CartIcon




