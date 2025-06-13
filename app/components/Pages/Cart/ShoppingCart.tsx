import { useCallback } from "react";
import { TrashIcon } from "~/components/Icons/TrashIcon";
import Footer from "~/components/UI/Footer";
import Notification from "~/components/UI/Notification";
import QuantitySelector from "~/components/UI/QuantitySelector";
import { useAppDispatch, useAppSelector } from "~/hooks/reduxHooks";
import { addPack, removeFromCart, removePack } from "~/redux/slices/cartSlice";

function ShoppingCart() {
  const cart = useAppSelector((state) => state.cart.cartItems);
  const species = useAppSelector((state) => state.species.species);

  const dispatch = useAppDispatch();

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
    (packId: number) => {
      dispatch(addPack(packId));
    },
    []
  );

  const removeQuantity = useCallback(
    (packId: number) => {
      dispatch(removePack(packId));
    },
    []
  );

  const removeItem = useCallback(
    (packId: number) => {
      dispatch(removeFromCart(packId));
    },
    []
  );

  return (
    <div
      data-testid="SHOPPING_CART.CONTAINER:VIEW"
      className="flex flex-1 flex-col justify-between overflow-y-auto"
    >
      <div className="flex flex-1 p-2.5 justify-center items-center flex-col gap-2.5">
        {cart.length === 0 ? (
          <Notification
            testId="SHOPPING_CART.CONTAINER.NOTIFICATION:VIEW"
            text="Cart is empty!"
            severity="INFO"
          />
        ) : (
          <div className="flex flex-col max-w-[1000px] w-[100%] bg-white">
            {cart.map((item) => {

              const price = findPriceByPackId(item.packId) / 100;

              return (
                <div
                  key={item.packId}
                  className="flex justify-between items-center px-2.5 py-4 gap-2.5 border-1 text-black">
                  <div className="flex-1">
                    <img src={item.imageUrl} className="h-32 w-32 rounded-xl object-contain" />
                  </div>
                  <p className="flex-1 underline text-center">
                    {item.name}
                  </p>
                  <p className="flex-1 text-center">
                    ${price}
                  </p>
                  <QuantitySelector
                    initialQuantity={item.quantity}
                    onAdd={() => addQuantity(item.packId)}
                    onRemove={() => removeQuantity(item.packId)}
                  />
                  <p className="flex-1 text-center">
                    ${(price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    className="cursor-pointer"
                    onPointerUp={() => removeItem(item.packId)}>
                    <TrashIcon />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ShoppingCart;
