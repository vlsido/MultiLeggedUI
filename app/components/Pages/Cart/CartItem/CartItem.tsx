import { useCallback } from "react";
import { NavLink } from "react-router";
import { TrashIcon } from "~/components/Icons/TrashIcon";
import QuantitySelectorPill from "~/components/UI/selectors/QuantitySelectorPill";
import { useAppDispatch, useAppSelector } from "~/hooks/reduxHooks";
import {
  removeFromCart,
  setItemQuantity,
  type CartItemProps,
} from "~/redux/slices/cartSlice";
import { findPriceByProductId } from "~/utils/cart-utils";

interface ICartItem {
  item: CartItemProps;
}

function CartItem(props: ICartItem) {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const dispatch = useAppDispatch();

  const removeItem = useCallback((productId: number) => {
    dispatch(removeFromCart(productId));
  }, []);

  const onQuantityChange = useCallback((quantity: number) => {
    dispatch(setItemQuantity({ id: props.item.productId, quantity: quantity }));
  }, []);

  const price =
    (findPriceByProductId(cartItems, props.item.productId) *
      props.item.quantity) /
    100;

  return (
    <div
      key={props.item.productId}
      className="flex flex-col md:flex-row justify-between items-center px-2.5 py-4 gap-2.5 rounded-xl border-1 bg-white text-black"
    >
      <button
        className="flex w-[100%] justify-end md:hidden cursor-pointer"
        onPointerUp={() => removeItem(props.item.productId)}
      >
        <TrashIcon />
      </button>
      <div className="flex-1">
        <img
          src={props.item.imageUrl}
          className="h-32 w-32 rounded-xl object-contain"
        />
      </div>
      <NavLink
        className="flex-1 underline text-center"
        to={`/store/product/${props.item.productId}?r=cart`}
      >
        {props.item.name} ({props.item.form})
      </NavLink>
      <div className="flex md:flex-1 w-[100%] justify-between">
        <p className="md:hidden">Price:</p>
        <p className="md:flex-1 text-center">
          €
          {(
            findPriceByProductId(cartItems, props.item.productId) / 100
          ).toFixed(2)}
          <span className="text-[14px]">/per 1</span>
        </p>
      </div>
      <div className="flex md:flex-1 w-[100%] justify-between items-center">
        <p className="md:hidden">Quantity:</p>
        <QuantitySelectorPill
          value={props.item.quantity}
          onChange={(value: number) => onQuantityChange(value)}
          minQuantity={props.item.productPrices[0].minQuantity}
          maxQuantity={props.item.unitsLeft}
        />
      </div>
      <div className="flex md:flex-1 w-[100%] justify-between">
        <p className="md:hidden">Sub-total:</p>
        <p className="md:flex-1 relative text-center">
          €{price.toFixed(2)}
          <span className="hidden md:flex absolute top-[-20px] w-full justify-center opacity-90">
            (sub-total)
          </span>
        </p>
      </div>
      <button
        className="hidden md:flex cursor-pointer"
        onPointerUp={() => removeItem(props.item.productId)}
      >
        <TrashIcon />
      </button>
    </div>
  );
}

export default CartItem;
