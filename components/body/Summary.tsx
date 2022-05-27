import { Dispatch, SetStateAction, useEffect } from "react";
import { useSelector } from "react-redux";
import { SHIPPING_FEE } from "../../constants/Fee";
import useCartTotals from "../../hooks/useCartTotals";
import { CartItems } from "../../store/CartSlice";
import SummaryLine from "../molecules/SummaryLine";

const Summary = ({
  isDisabled,
  setIsDisabled,
}: {
  isDisabled: boolean;
  setIsDisabled: Dispatch<SetStateAction<boolean>>;
}) => {
  const items = useSelector(CartItems);
  const { cartTotal, tax, grandTotal } = useCartTotals();

    useEffect(() => {
      setIsDisabled(items.length < 1);
    }, [items, setIsDisabled]);


  return (
    <div className="summary_content">
      <h2>Summary</h2>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {/* eslint-disable-next-line */}
              <img src={item.cartImage} alt={item.shortName} />
              <div className="arrange_item">
                <div className="list_content">
                  <h2>{item.shortName}</h2>
                  <h3>x{item.quantity}</h3>
                </div>
                <p>$ {item.price.toLocaleString("en-US")}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="no_cart">
          <p> No Items in cart</p>
        </div>
      )}
      <div className="summary_line">
        <SummaryLine name="total" amount={cartTotal} />
        <SummaryLine name="shipping" amount={SHIPPING_FEE} />
        <SummaryLine name="vat (included)" amount={tax} />
        <div className="give-margin">
          <SummaryLine name="Grand Total" amount={grandTotal} grandTotal />
        </div>
        <button type="submit" className="button_primary">
          Continue & Pay
        </button>
      </div>
    </div>
  );
};
export default Summary;
