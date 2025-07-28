import {
  PaymentElement,
  useCheckout,
  type CheckoutContextValue,
} from "@stripe/react-stripe-js";
import {
  useState,
  type Dispatch,
  type InputHTMLAttributes,
  type SetStateAction,
} from "react";

async function validateEmail(email: string, checkout: CheckoutContextValue) {
  const updateResult = await checkout.updateEmail(email);
  const isValid = updateResult.type !== "error";

  return { isValid, message: !isValid ? updateResult.error.message : null };
}

interface EmailInputProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  error: string | null;
  setError: Dispatch<SetStateAction<string | null>>;
}

function EmailInput(props: EmailInputProps) {
  const checkout = useCheckout();

  async function handleBlur() {
    if (!props.email) {
      return;
    }

    const { isValid, message } = await validateEmail(props.email, checkout);
    if (!isValid) {
      props.setError(message);
    }
  }

  function handleChange(event: InputHTMLAttributes<HTMLInputElement>) {
    props.setError(null);
    props.setEmail(event.target.value);
  }

  return (
    <>
      <label className="flex gap-2 text-black bg-gray-200  text-[16px] border-black-500/10 border-[0.1px] rounded-md drop-shadow-sm pl-2 items-center mb-2">
        Email
        <input
          id="email"
          type="text"
          value={props.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={"rounded-sm w-full p-2"}
        />
      </label>
      {props.error && (
        <div id="email-errors" className="text-red-500">
          {props.error}
        </div>
      )}
    </>
  );
}

function CheckoutForm() {
  const checkout = useCheckout();

  console.log(checkout);

  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleSubmit(e) {
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
  }

  return (
    <div className="bg-white p-4 rounded-3xl">
      <form onSubmit={handleSubmit}>
        <EmailInput
          email={email}
          setEmail={setEmail}
          error={emailError}
          setError={setEmailError}
        />
        <div
          className={
            emailError || email === "" ? "opacity-50 pointer-events-none" : ""
          }
        >
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
        </div>
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
