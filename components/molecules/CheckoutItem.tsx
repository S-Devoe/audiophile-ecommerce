import Image from "next/image";
import CartItem from "../../interfaces/CartItem";

const CheckoutItem = ({ item }: { item: CartItem }): JSX.Element => {
  return (
    <li className="checkout-item_list">
      <div className="image">
        <Image
          src={item.cartImage}
          alt={item.shortName}
          width={"100px"}
          height={"100px"}
          style={{ borderRadius: ".5rem" }}
        />
      </div>
      <div className="chkout_list_content">
        <div className="list_content">
          <div className="text">
            <h2>{item.shortName}</h2>
            <h3>x{item.quantity}</h3>
          </div>
          <p>$ {item.price.toLocaleString("en-US")}</p>
        </div>
      </div>
    </li>
  );
};
export default CheckoutItem;
