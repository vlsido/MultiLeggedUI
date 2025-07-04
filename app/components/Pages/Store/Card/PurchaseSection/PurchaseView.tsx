import TextButton from "~/components/UI/buttons/TextButton/TextButton";
import PricePackages from "./PricePackages";
import { useAppDispatch, useAppSelector } from "~/hooks/reduxHooks";
import { useCallback, useState } from "react";
import type { Animal, AnimalCategory, AnimalPrice } from "~/types/common";
import { pushToCart } from "~/redux/slices/cartSlice";
import { useNavigate } from "react-router";

interface PurchaseViewProps {
  animal: Animal;
}

function PurchaseView(props: PurchaseViewProps) {
  const [quantity, setQuantity] = useState<number>(
    props.animal.animalPrices[0].minQuantity,
  );

  const navigate = useNavigate();

  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const checkIfIsAlreadyInCart = useCallback(() => {
    return cartItems.some((item) => item.animalId === props.animal.id);
  }, [cartItems]);

  const [isAlreadyInCart, setIsAlreadyInCart] = useState<boolean>(
    checkIfIsAlreadyInCart,
  );

  const dispatch = useAppDispatch();

  const handleAddToCart = useCallback(
    (
      animalId: number,
      name: string,
      imageUrl: string,
      form: string,
      animalPrices: AnimalPrice[],
      unitsLeft: number,
    ) => {
      if (isAlreadyInCart === true) {
        return navigate("/cart");
      }
      dispatch(
        pushToCart({
          animalId,
          name,
          imageUrl,
          form,
          animalPrices,
          unitsLeft: unitsLeft,
          quantity: quantity,
        }),
      );
      setIsAlreadyInCart(true);
    },
    [quantity],
  );

  return (
    <div className="flex flex-col w-full my-2 gap-2 items-center text-[20px]">
      <PricePackages
        animal={props.animal}
        quantity={quantity}
        onQuantityChange={(value) => setQuantity(value)}
      />
      <TextButton
        ariaLabel={`Add ${props.animal.name} to cart`}
        text={isAlreadyInCart ? "Already in cart" : "Add to cart"}
        containerClassName={
          "px-10 py-4 w-full rounded-full bg-black-500 text-white cursor-pointer drop-shadow-xl " +
          (isAlreadyInCart && "bg-black-500/50")
        }
        textClassName="text-[20px]"
        onPress={() =>
          handleAddToCart(
            props.animal.id,
            props.animal.name,
            props.animal.imageUrl,
            props.animal.form,
            props.animal.animalPrices,
            props.animal.units,
          )
        }
      />
    </div>
  );
}

export default PurchaseView;
