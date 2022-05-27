import CheckoutForm from "../body/CheckoutForm";
import GoBack from "../molecules/GoBack";

const CheckoutPage = () => {
  return (
    <main className="checkout_page-template">
      <div className="wrapper">
        <GoBack />
        <CheckoutForm />
      </div>
    </main>
  );
}
export default CheckoutPage