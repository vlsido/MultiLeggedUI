import { useCallback } from "react";
import { useNavigate } from "react-router";
import { TrashIcon } from "~/components/Icons/TrashIcon";
import TextButton from "~/components/UI/buttons/TextButton";
import Footer from "~/components/UI/Footer";
import Notification from "~/components/UI/Notification";
import QuantitySelector from "~/components/UI/QuantitySelector";
import { useAppDispatch, useAppSelector } from "~/hooks/reduxHooks";
import { addPack, removeFromCart, removePack } from "~/redux/slices/cartSlice";

function ShoppingCart() {
  const cart = useAppSelector((state) => state.cart.cartItems);
  const species = useAppSelector((state) => state.species.species);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  function findPriceByPackId(id: number): number {
    for (const category of species) {
      for (const sp of category.data) {
        const pack = sp.speciesPacks.find((pack) => pack.id === id);
        if (pack) return pack.price;
      }
    }
    return 0;
  };

  const addQuantity = useCallback(
    (priceId: number) => {
      dispatch(addPack(priceId));
    },
    []
  );

  const removeQuantity = useCallback(
    (priceId: number) => {
      dispatch(removePack(priceId));
    },
    []
  );

  const removeItem = useCallback(
    (priceId: number) => {
      dispatch(removeFromCart(priceId));
    },
    []
  );

  const handleGoBack = useCallback(
    () => {
      return navigate("/");
    },
    []
  );

  const handleGoCheckout = useCallback(
    () => {
      return navigate("/checkout");
    },
    []
  );

  return (
    <div
      data-testid="SHOPPING_CART.CONTAINER:VIEW"
      className="flex flex-1 flex-col justify-between overflow-y-auto"
    >
      <div className="flex flex-1 p-5 justify-center items-center flex-col gap-2.5">
        {cart.length === 0 ? (
          <Notification
            testId="SHOPPING_CART.CONTAINER.NOTIFICATION:VIEW"
            text="Cart is empty!"
            severity="INFO"
          />
        ) : (
          <>
            <p className="flex md:hidden text-[20px] self-start font-bold">CART</p>
            <div className="flex flex-col max-w-[1000px] w-[100%] bg-white">
              {cart.map((item) => {

                const price = findPriceByPackId(item.priceId) / 100;

                return (
                  <div
                    key={item.priceId}
                    className="flex flex-col md:flex-row justify-between items-center px-10 md:px-2.5 py-4 gap-2.5 border-1 text-black">
                    <button
                      className="flex w-[100%] justify-end md:hidden cursor-pointer"
                      onPointerUp={() => removeItem(item.priceId)}>
                      <TrashIcon />
                    </button>
                    <div className="flex-1">
                      <img src={item.imageUrl} className="h-32 w-32 rounded-xl object-contain" />
                    </div>
                    <p className="flex-1 underline text-center">
                      {item.name} x {item.units} ({item.form})
                    </p>
                    <div className="flex md:flex-1 w-[100%] justify-between">
                      <p className="md:hidden">Price:</p>
                      <p className="md:flex-1 text-center">
                        ${price}
                      </p>
                    </div>
                    <div className="flex md:flex-1 w-[100%] justify-between items-center">
                      <p className="md:hidden">Quantity:</p>
                      <QuantitySelector
                        initialQuantity={item.quantity}
                        onAdd={() => addQuantity(item.priceId)}
                        onRemove={() => removeQuantity(item.priceId)}
                      />
                    </div>
                    <div className="flex md:flex-1 w-[100%] justify-between">
                      <p className="md:hidden">Sub-total:</p>
                      <p className="md:flex-1 relative text-center">
                        ${(price * item.quantity).toFixed(2)}
                        <p className="hidden md:flex absolute top-[-20px] w-full justify-center opacity-90">(sub-total)</p>
                      </p>
                    </div>
                    <button
                      className="hidden md:flex cursor-pointer"
                      onPointerUp={() => removeItem(item.priceId)}>
                      <TrashIcon />
                    </button>
                  </div>
                );
              })}
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
