import { useCallback } from "react";
import { useNavigate } from "react-router";
import TextButton from "~/components/UI/buttons/TextButton/TextButton";
import Footer from "~/components/UI/Footer";
import Notification from "~/components/UI/Notification";
import { useAppSelector } from "~/hooks/reduxHooks";
import CartItem from "../CartItem/CartItem";

function ShoppingCart() {
  const cart = useAppSelector((state) => state.cart.cartItems);

  const navigate = useNavigate();

  const handleGoBack = useCallback(() => {
    return navigate("/store");
  }, []);

  const handleGoCheckout = useCallback(() => {
    return navigate("/checkout");
  }, []);

  return (
    <div className="flex flex-1 flex-col justify-between overflow-y-auto">
      <div className="flex flex-1 p-5 justify-center items-center flex-col gap-2.5">
        {cart.length === 0 ? (
          <Notification text="Cart is empty!" severity="INFO" />
        ) : (
          <>
            <p className="flex md:hidden text-[20px] self-start font-bold">
              CART
            </p>
            <div className="flex flex-col max-w-[1000px] w-[100%] bg-white">
              {cart.map((item) => (
                <CartItem item={item} />
              ))}
            </div>
          </>
        )}
        <TextButton
          text={cart.length === 0 ? "Back to store" : "Proceed to checkout"}
          ariaLabel={cart.length === 0 ? "Go back" : "Go checkout"}
          containerClassName="bg-yellow-100 w-full max-w-[250px] p-2.5 rounded-full drop-shadow-md cursor-pointer"
          textClassName="text-black-500"
          onPress={cart.length === 0 ? handleGoBack : handleGoCheckout}
        />
      </div>
      <Footer />
    </div>
  );
}

export default ShoppingCart;
