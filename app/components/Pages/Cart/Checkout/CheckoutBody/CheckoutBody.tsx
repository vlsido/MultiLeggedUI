import { CheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useMemo } from "react";
import CheckoutForm from "../CheckoutForm";
import { userMessageManager } from "~/managers/userMessageManager";

const stripePromise = loadStripe(
  "pk_test_51RjTKDPI2Lgb9onPFEhhdBOAbZWotOiwdhSuvJADkva1apcsQSbkpaFHeZx9hDbIdt0Ya5kYZeFnBYVSceC27Ygj00IN3wZ5Kd",
);

function CheckoutBody() {
  const promise = useMemo(async () => {
    return fetch("http://192.168.0.102:8080/api/create-checkout-session", {
      method: "POST",
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
