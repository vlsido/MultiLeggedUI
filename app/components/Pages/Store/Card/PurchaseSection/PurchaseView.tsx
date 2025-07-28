import TextButton from "~/components/UI/buttons/TextButton/TextButton";
import PricePackages from "./PricePackages";
import { useAppDispatch, useAppSelector } from "~/hooks/reduxHooks";
import { useCallback, useState } from "react";
import type { Product, ProductPrice } from "~/types/common";
import { pushToCart } from "~/redux/slices/cartSlice";
import { useNavigate } from "react-router";

interface PurchaseViewProps {
  product: Product;
}

function PurchaseView(props: PurchaseViewProps) {
  const [quantity, setQuantity] = useState<number>(
    props.product.productPrices[0].minQuantity,
  );

  const navigate = useNavigate();

  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const checkIfIsAlreadyInCart = useCallback(() => {
    return cartItems.some((item) => item.productId === props.product.id);
  }, [cartItems]);

  const [isAlreadyInCart, setIsAlreadyInCart] = useState<boolean>(
    checkIfIsAlreadyInCart,
  );

  const dispatch = useAppDispatch();

  const handleAddToCart = useCallback(
    (
      productId: number,
      name: string,
      imageUrl: string,
      form: string,
      productPrices: ProductPrice[],
      unitsLeft: number,
    ) => {
      if (isAlreadyInCart === true) {
        return navigate("/cart");
      }
      dispatch(
        pushToCart({
          productId,
          name,
          imageUrl,
          form,
          productPrices,
          unitsLeft: unitsLeft,
          quantity: quantity,
        }),
      );
      setIsAlreadyInCart(true);
    },
    [quantity],
  );

  return (
    <div className="flex flex-col w-full md:max-w-[400px] self-center my-2 gap-2 items-center text-[20px] text-black">
      <PricePackages
        product={props.product}
        quantity={quantity}
        onQuantityChange={(value) => setQuantity(value)}
      />
      <TextButton
        ariaLabel={`Add ${props.product.name} to cart`}
        text={isAlreadyInCart ? "Already in cart" : "Add to cart"}
        containerClassName={
          "px-10 py-4 w-full rounded-full bg-black-500 text-white cursor-pointer drop-shadow-xl " +
          (isAlreadyInCart && "bg-black-500/50")
        }
        textClassName="text-[20px]"
        onPress={() =>
          handleAddToCart(
            props.product.id,
            props.product.name,
            props.product.imageUrl,
            props.product.form,
            props.product.productPrices,
            props.product.units,
          )
        }
      />
    </div>
  );
}

export default PurchaseView;
