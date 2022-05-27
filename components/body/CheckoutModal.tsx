import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCartTotals from "../../hooks/useCartTotals";
import { CartItems, clearCart } from "../../store/CartSlice";
import { useModal } from "../../store/ModalContextProvider";
import CheckoutItem from "../molecules/CheckoutItem";

const CheckoutModal = () => {
  const items = useSelector(CartItems);
  const { grandTotal } = useCartTotals();
  const [showMore, setShowMore] = useState(false);
  const { handleShowCheckout, handleHideCheckout } = useModal();
  const dispatch = useDispatch();

  const handleClick = () => {
    handleHideCheckout();
    dispatch(clearCart());
  };

  return (
    <>
      <div className="overlay"></div>
      <section className="checkout-modal-content_position">
        <div className="checkout-modal-content">
          <Image
            src="/images/shared/desktop/icon-check-mark.svg"
            alt="check mark"
            width={64}
            height={64}
          />
          <div className="checkout_content">
            <div className="content_text">
              <h2>
                Thank you <span>For your order</span>
              </h2>
              <p>You will receive an email confirmation shortly.</p>
            </div>
            <div className="content_bought">
              <div className="list">
                <ul>
                  {items.slice(0, showMore ? items.length : 1).map((item) => (
                    <CheckoutItem key={item.id} item={item} />
                  ))}
                </ul>
                {items.length > 1 && (
                  <div className="checkout_btn">
                    <button
                      className="button_chkout"
                      onClick={() => {
                        setShowMore((prev) => !prev);
                      }}
                    >
                      {showMore
                        ? "View less"
                        : `and ${items.length - 1} other item(s)`}
                    </button>
                  </div>
                )}
              </div>
              <div className={`grand-total ${showMore ? "flex-this" : null}`}>
                <div className="">
                  <p>grand total</p>
                  <h2>$ {grandTotal.toLocaleString("en-US")}</h2>
                </div>
              </div>
            </div>
          </div>
          <Link href="/" passHref>
            <a>
              <button className="button_primary" onClick={handleClick}>
                Back to home
              </button>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
};
export default CheckoutModal;
