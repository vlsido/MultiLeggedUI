import { useCallback } from "react";
import { useNavigate } from "react-router";
import TextButton from "~/components/UI/buttons/TextButton/TextButton";
import Notification from "~/components/UI/Notification";
import { useAppSelector } from "~/hooks/reduxHooks";
import CartItem from "../CartItem/CartItem";
import { findCartPrice } from "~/utils/cart-utils";

function CartBody() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const price = findCartPrice(cartItems);

  const navigate = useNavigate();

  const handleGoBack = useCallback(() => {
    return navigate("/store");
  }, []);

  const handleGoShipping = useCallback(() => {
    return navigate("/cart/shipping");
  }, []);

  return (
    <div className="flex flex-1 flex-col justify-between overflow-y-auto">
      <div className="flex flex-1 p-5 justify-center items-center flex-col gap-2.5">
        {cartItems.length === 0 ? (
          <Notification text="Cart is empty!" severity="INFO" />
        ) : (
          <>
            <p className="flex md:hidden text-[20px] self-start font-bold">
              CART
            </p>
            <div className="flex flex-col max-w-[1000px] w-[100%] bg-gray-500/50 rounded-3xl p-8">
              <div className="flex flex-col gap-2">
                {cartItems.map((item) => (
                  <CartItem key={item.name} item={item} />
                ))}
              </div>
              <div className="flex w-full justify-end">
                <div className="flex flex-col bg-white text-black w-full max-w-[250px] rounded-xl p-2.5 mt-8 gap-2.5 drop-shadow-md">
                  <div>
                    <div className="flex justify-between">
                      <label htmlFor="items_price">Items price</label>
                      <output id="items_price" name="items_price">
                        €{(price / 100).toFixed(2)}
                      </output>
                    </div>
                    <div className="flex justify-between">
                      <label htmlFor="shipping">Shipping</label>
                      <output id="shipping" name="shipping">
                        €1.99
                      </output>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <label htmlFor="total">
                      <b>Total</b>
                    </label>
                    <output id="total" name="total">
                      €{((price + 199) / 100).toFixed(2)}
                    </output>
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-end">
                <TextButton
                  text={
                    cartItems.length === 0
                      ? "Back to store"
                      : "Proceed to shipping"
                  }
                  ariaLabel={cartItems.length === 0 ? "Go back" : "Go checkout"}
                  containerClassName="bg-black-500 w-full max-w-[250px] p-2.5 mt-8 rounded-full drop-shadow-md cursor-pointer"
                  textClassName="text-white"
                  onPress={
                    cartItems.length === 0 ? handleGoBack : handleGoShipping
                  }
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
