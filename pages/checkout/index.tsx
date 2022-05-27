import Head from "next/head";
import CheckoutPage from "../../components/templates/CheckoutPage";

const index = () => {
  return (
    <>
      <Head>
        <title>Audiophile - checkout</title>
      </Head>
      <div className="checkout-page">
        <CheckoutPage />
      </div>
    </>
  );
}
export default index