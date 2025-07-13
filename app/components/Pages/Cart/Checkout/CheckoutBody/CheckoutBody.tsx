import { CheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useMemo } from "react";
import CheckoutForm from "../CheckoutForm";
import { userMessageManager } from "~/managers/userMessageManager";
import { useAppSelector } from "~/hooks/reduxHooks";

const stripePromise = loadStripe(
  "pk_test_51RjTKDPI2Lgb9onPFEhhdBOAbZWotOiwdhSuvJADkva1apcsQSbkpaFHeZx9hDbIdt0Ya5kYZeFnBYVSceC27Ygj00IN3wZ5Kd",
);

function CheckoutBody() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const promise = useMemo(async () => {
    const data = cartItems.map((item) => {
      return {
        animalId: item.animalId,
        quantity: item.quantity,
      };
    });

    return fetch("http://192.168.0.102:8080/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("clientSecret", json.clientSecret);
        return json.clientSecret;
      })
      .catch(() => {
        userMessageManager.showUserMessage(
          "Server error! Try later!",
          "ERROR",
          3000,
        );
      });
  }, []);

  return (
    <div className="flex flex-1 justify-center items-center">
      <CheckoutProvider
        stripe={stripePromise}
        options={{ fetchClientSecret: () => promise }}
      >
        <CheckoutForm />
      </CheckoutProvider>
    </div>
  );
}

export default CheckoutBody;
