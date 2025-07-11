import { PaymentElement, useCheckout } from "@stripe/react-stripe-js";
import { useState } from "react";

const validateEmail = async (email, checkout) => {
  const updateResult = await checkout.updateEmail(email);
  const isValid = updateResult.type !== "error";

  return { isValid, message: !isValid ? updateResult.error.message : null };
};

const EmailInput = ({ email, setEmail, error, setError }) => {
  const checkout = useCheckout();

  const handleBlur = async () => {
    if (!email) {
      return;
    }

    const { isValid, message } = await validateEmail(email, checkout);
    if (!isValid) {
      setError(message);
    }
  };

  const handleChange = (e) => {
    setError(null);
    setEmail(e.target.value);
  };

  return (
    <>
      <label className="flex gap-2 text-black">
        Email
        <input
          id="email"
          type="text"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={error ? "error" : "bg-gray-500 rounded-sm"}
        />
      </label>
      {error && <div id="email-errors">{error}</div>}
    </>
  );
};

function CheckoutForm() {
  const checkout = useCheckout();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // checkout.on("change", (session) => {
  //   // Handle changes to the checkout session
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const { isValid, message } = await validateEmail(email, checkout);
    if (!isValid) {
      setEmailError(message);
      setMessage(message);
      setIsLoading(false);
      return;
    }

    const confirmResult = await checkout.confirm();

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (confirmResult.type === "error") {
      setMessage(confirmResult.error.message);
    }

    console.log("success");

    setIsLoading(false);
  };

  return (
    <div className="bg-white p-4 rounded-3xl">
      <form onSubmit={handleSubmit}>
        <EmailInput
          email={email}
          setEmail={setEmail}
          error={emailError}
          setError={setEmailError}
        />
        <h4 className="text-black">Payment</h4>
        <PaymentElement id="payment-element" />
        <div className="flex w-full justify-end mt-4">
          <button
            className="bg-black-500 py-2 px-4 self-center rounded-full"
            disabled={isLoading}
            id="submit"
          >
            {isLoading ? (
              <div className="spinner"></div>
            ) : (
              `Pay ${checkout.total.total.amount} now`
            )}
          </button>
        </div>
        {/* Show any error or success messages */}
        {message && (
          <div className="text-black" id="payment-message">
            {message}
          </div>
        )}
      </form>
    </div>
  );
}

export default CheckoutForm;
