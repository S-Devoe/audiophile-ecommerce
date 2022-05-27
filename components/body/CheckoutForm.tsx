import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useModal } from "../../store/ModalContextProvider";
import Summary from "./Summary";

interface Inputs {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  ZIPCode: string;
  city: string;
  country: string;
  eMoneyNumber: number;
  eMoneyPin: number;
}

const CheckoutForm = (): JSX.Element => {
  const [paymentType, setPaymentType] = useState("e-money");
  const [isDisabled, setIsDisabled] = useState(false);
  const { handleShowCheckout } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onBlur" });

  const submitForm = (form: any,e: any) => {
    window.scroll({
      top: 0,
      left: 0,
      // behavior: "smooth",
    });
    handleShowCheckout();
    e.preventDefault()
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="form-content">
          <h1>Checkout</h1>
          <fieldset className="billing_form">
            <legend>Billing Details</legend>
            <div className="billing_form_grid">
              <div className="form_field-1">
                <label htmlFor="name">
                  Name <span>{errors.name?.message}</span>
                </label>

                <input
                  type="text"
                  id="name"
                  placeholder="Alexei Ward"
                  {...register("name", {
                    required: "Field cannot be empty",
                    pattern: {
                      value: /^[^<>%$#^*]*$/,
                      message: "Wrong format",
                    },
                  })}
                />
              </div>
              <div className="form_field-2">
                <label htmlFor="emailAddress">
                  Email Address<span>{errors.emailAddress?.message}</span>
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  placeholder="alexei@mail.com"
                  {...register("emailAddress", {
                    required: "Field cannot be empty",
                    pattern: {
                      value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/,
                      message: "Wrong format",
                    },
                  })}
                />
              </div>
              <div className="form_field-3">
                <label htmlFor="phoneNumber">
                  Phone Number <span>{errors.phoneNumber?.message}</span>
                </label>
                <input
                  type="number"
                  id="phoneNumber"
                  placeholder="+1 202-555-0136"
                  {...register("phoneNumber", {
                    required: "Field cannot be empty",
                  })}
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="shipping_form">
            <legend>Shipping Info</legend>
            <div className="shipping_form_grid">
              <div className="form_field_address">
                <label htmlFor="address">
                  Your Address <span>{errors.address?.message}</span>
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="1137 Williams Avenue"
                  {...register("address", {
                    required: "Field cannot be empty",
                  })}
                />
              </div>
              <div className="form_field_zip">
                <label htmlFor="zip">
                  Zip Code <span>{errors.ZIPCode?.message}</span>
                </label>
                <input
                  type="number"
                  id="zip"
                  placeholder="10001"
                  {...register("ZIPCode", {
                    required: "Field cannot be empty",
                    pattern: {
                      value: /^[0-9]{5}(?:-[0-9]{4})?$/,
                      message: "Wrong format",
                    },
                  })}
                />
              </div>
              <div className="form_field_city">
                <label htmlFor="city">
                  City <span>{errors.city?.message}</span>
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="New York"
                  {...register("city", {
                    required: "Field cannot be empty",
                  })}
                />
              </div>
              <div className="form_field_country">
                <label htmlFor="country">
                  Country <span>{errors.country?.message}</span>
                </label>
                <input
                  type="text"
                  id="country"
                  placeholder="United States"
                  {...register("country", {
                    required: "Field cannot be empty",
                  })}
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="payment_form">
            <legend>Payment Details</legend>
            <div className="payment_form_grid">
              <p>Payment Method</p>
              <div className="radio_form">
                <div
                  className="e-money"
                  onClick={() => setPaymentType("e-money")}
                >
                  <input type="radio" id="e-Money" name="payment" />
                  <span>
                    <div
                      className={`${
                        paymentType === "e-money" ? "circle1" : null
                      }`}
                    ></div>
                  </span>
                  <label htmlFor="e-Money">e-Money</label>
                </div>
                <div className="cash" onClick={() => setPaymentType("cash")}>
                  <input type="radio" id="cash" value="cash" name="payment" />
                  <span>
                    <div
                      className={`${paymentType === "cash" ? "circle1" : null}`}
                    ></div>
                  </span>
                  <label htmlFor="cash">Cash On Delivery</label>
                </div>
              </div>
            </div>
          </fieldset>
          {paymentType === "e-money" ? (
            <div className="e-money_content">
              <div className="e-form1">
                <label htmlFor="e-number">
                  e-Money Number <span>{errors.eMoneyNumber?.message}</span>
                </label>
                <input
                  type="number"
                  id="e-number"
                  placeholder="238521993"
                  {...register("eMoneyNumber", {
                    required: "Field cannot be empty",
                    pattern: {
                      value: /^[0-9]{9}$/,
                      message: "Wrong format",
                    },
                  })}
                />
              </div>
              <div className="e-form2">
                <label htmlFor="e-pin">
                  e-Money Pin <span>{errors.eMoneyPin?.message}</span>
                </label>
                <input
                  type="number"
                  id="e-pin"
                  placeholder="6891"
                  {...register("eMoneyPin", {
                    required: "Field cannot be empty",
                    pattern: {
                      value: /^[0-9]{4}$/,
                      message: "Wrong format",
                    },
                  })}
                />
              </div>
            </div>
          ) : (
            <div className="cash-content">
              {/* eslint-disable-next-line */}
              <img
                src="/images/checkout/icon-cash-on-delivery.svg"
                alt="pay on delivery"
              />
              <p>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}
        </div>
        <Summary isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
      </form>
    </>
  );
};
export default CheckoutForm;
