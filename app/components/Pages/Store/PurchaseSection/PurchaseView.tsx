import TextButton from "~/components/UI/buttons/TextButton";
import PricePackages from "./PricePackages";
import { useAppDispatch } from "~/hooks/reduxHooks";
import { useCallback, useState } from "react";
import type { Animal, AnimalCategory, AnimalPrice } from "~/types/common";
import { pushToCart } from "~/redux/slices/cartSlice";

interface PurchaseViewProps {
  animal: Animal;
}

function PurchaseView(props: PurchaseViewProps) {
  const [quantity, setQuantity] = useState<number>(
    props.animal.animalPrices[0].minQuantity,
  );

  const dispatch = useAppDispatch();

  const handleAddToCart = useCallback(
    (
      animalId: number,
      name: string,
      imageUrl: string,
      form: string,
      animalPrices: AnimalPrice[],
    ) => {
      dispatch(
        pushToCart({
          animalId,
          name,
          imageUrl,
          form,
          animalPrices,
          quantity: quantity,
        }),
      );
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
        text="Add to cart"
        containerClassName="px-10 py-4 w-full rounded-full bg-black-500 text-white cursor-pointer drop-shadow-md"
        textClassName="text-[20px]"
        onPress={() =>
          handleAddToCart(
            props.animal.id,
            props.animal.name,
            props.animal.imageUrl,
            props.animal.form,
            props.animal.animalPrices,
          )
        }
      />
    </div>
  );
}

export default PurchaseView;
