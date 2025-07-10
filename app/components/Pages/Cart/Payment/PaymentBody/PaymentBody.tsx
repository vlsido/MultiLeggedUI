import { CheckoutProvider, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51RjTKDPI2Lgb9onPFEhhdBOAbZWotOiwdhSuvJADkva1apcsQSbkpaFHeZx9hDbIdt0Ya5kYZeFnBYVSceC27Ygj00IN3wZ5Kd",
);

async function fetchClientSecret() {
  return fetch("/create-checkout-session", { method: "POST" })
    .then((response) => response.json())
    .then((json) => json.checkoutSessionClientSecret);
}

function PaymentBody() {
  return (
    <CheckoutProvider stripe={stripePromise} options={{ fetchClientSecret }}>
      <PaymentElement />
      <button>Submit</button>
    </CheckoutProvider>
  );
}

export default PaymentBody;
