import Image from "next/image"
import { useDispatch } from "react-redux"
import CartItem from "../../interfaces/CartItem"
import { decreaseQuantity, increaseQuantity } from "../../store/CartSlice"
import ProductQuantity from "./ProductQuantity"

const CartItem:React.FC<{item: CartItem}> = ({item}): JSX.Element=> {
    const dispatch = useDispatch()
    // console.log(item)

    
    const increment = () => {
        dispatch(increaseQuantity(item.id))
        
    }

     const decrement = () => {
       dispatch(decreaseQuantity(item.id))
     };


  return (
    <li className="cart_item">
      <div className="cart_item_content">
        <Image
          src={item.cartImage}
          alt="cart image"
          height={64}
          width={64}
          style={{ borderRadius: ".5rem" }}
        />

        <div className="item_details">
          <h3>{item.shortName}</h3>
          <h4>$ {item.price.toLocaleString("en-US")}</h4>
        </div>
      </div>
      <ProductQuantity
        quantity={item.quantity}
        increment={increment}
        decrement={decrement}
      />
    </li>
  );
}
export default CartItem
