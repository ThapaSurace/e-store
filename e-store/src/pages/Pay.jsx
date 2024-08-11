import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { newRequest } from "../utils/newRequest";
import CheckoutForm from "../components/CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51POVok2KcGKNOUKnXEPMiJGgfOYoCgiVdZgJprjkjLvhO9QMrKf6rjzAdWVugZaV1t4luAVmKEqtsK9a6ZDxQPbq00pdNi3Xuu"
);

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");

  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const {address} = useSelector(state => state.address)


  useEffect(() => {
    const handleCheckOut = async () => {
      try {
        const orderData = {
          userId: user._id,
          products: items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
          })),
          amount: totalPrice,
          address: address,
        };

        const res = await newRequest.post("/order", orderData);
        setClientSecret(res.data.clientSecret);
        dispatch(clearCart());
      } catch (error) {
        console.log(error);
      }
    };
    handleCheckOut();
  }, []);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      <div className="min-h-[100vh] flex justify-center items-center mt-8 max-w-xl mx-auto py-10">
        <div className="w-full shadow-md border border-slate-300/85 rounded-md p-10">
          <h1 className="mb-6 text-center font-semibold text-sky-500 text-2xl">
            Payment Details
          </h1>
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
        </div>
      </div>
    </>
  );
};

export default Pay;