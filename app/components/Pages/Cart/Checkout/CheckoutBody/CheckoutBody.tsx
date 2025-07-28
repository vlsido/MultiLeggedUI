import { CheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm";
import { userMessageManager } from "~/managers/userMessageManager";
import { useAppSelector } from "~/hooks/reduxHooks";
import { serverIp } from "~/constants/common";
import { useLocation, useNavigate } from "react-router";

const stripePromise = loadStripe(
  "pk_test_51RjTKDPI2Lgb9onPFEhhdBOAbZWotOiwdhSuvJADkva1apcsQSbkpaFHeZx9hDbIdt0Ya5kYZeFnBYVSceC27Ygj00IN3wZ5Kd",
);

function CheckoutBody() {
  const location = useLocation();

  const navigate = useNavigate();

  const { firstName, lastName, phone } = location.state || {};

  const cartItems = useAppSelector((state) => state.cart.cartItems);

  async function promise() {
    if (firstName == undefined || lastName == undefined || phone == undefined) {
      userMessageManager.showUserMessage("Something went wrong", "ERROR", 5000);
      return navigate("/cart/shipping");
    }

    const items = cartItems.map((item) => {
      return {
        productId: item.productId,
        quantity: item.quantity,
      };
    });

    const data = {
      firstName,
      lastName,
      phone,
      items,
    };

    return fetch(`http://${serverIp}:8080/api/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.error) {
          userMessageManager.showUserMessage(json.error, "ERROR", 5000);
        }
        return json.clientSecret;
      });
  }

  return (
    <div className="flex flex-1 justify-center items-center bg-black/50">
      <CheckoutProvider
        stripe={stripePromise}
        options={{ fetchClientSecret: promise }}
      >
        <CheckoutForm />
      </CheckoutProvider>
    </div>
  );
}

export default CheckoutBody;
