import { useCallback } from "react";
import { useNavigate } from "react-router";
import TextButton from "~/components/UI/buttons/TextButton/TextButton";
import Notification from "~/components/UI/Notification";
import { useAppSelector } from "~/hooks/reduxHooks";
import CartItem from "../CartItem/CartItem";

function CartBody() {
  const cart = useAppSelector((state) => state.cart.cartItems);

  const navigate = useNavigate();

  const handleGoBack = useCallback(() => {
    return navigate("/store");
  }, []);

  const handleGoCheckout = useCallback(() => {
    return navigate("/cart/checkout");
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
            <div className="flex flex-col max-w-[1000px] w-[100%] bg-gray-500 rounded-3xl p-8">
              <div className="flex flex-col gap-2">
                {cart.map((item) => (
                  <CartItem key={item.name} item={item} />
                ))}
              </div>
              <div className="flex w-full justify-end">
                <TextButton
                  text={
                    cart.length === 0 ? "Back to store" : "Proceed to checkout"
                  }
                  ariaLabel={cart.length === 0 ? "Go back" : "Go checkout"}
                  containerClassName="bg-black-500 w-full max-w-[250px] p-2.5 mt-8 rounded-full drop-shadow-md cursor-pointer"
                  textClassName="text-white"
                  onPress={cart.length === 0 ? handleGoBack : handleGoCheckout}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartBody;
