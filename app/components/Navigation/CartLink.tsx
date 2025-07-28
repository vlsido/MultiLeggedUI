import { Link, useLocation } from "react-router";
import { ShoppingCartIcon } from "../Icons/ShoppingCartIcon";
import { useAppSelector } from "~/hooks/reduxHooks";
import { findCartPrice } from "~/utils/cart-utils";

function ShoppingCartLink() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  console.log(cartItems);

  const location = useLocation();

  return (
    <Link to={{ pathname: "/cart" }}>
      <div
        className={
          "flex flex-row px-[10px] py-[5px] gap-[10px] text-black text-[20px] rounded-full items-center " +
          (location.pathname.includes("/cart")
            ? "bg-white ring-1 ring-black"
            : "bg-gray-200")
        }
      >
        <ShoppingCartIcon />€{(findCartPrice(cartItems) / 100).toFixed(2)}
        <div className="text-[16px] opacity-[0.5]">
          {cartItems.length} items
        </div>
      </div>
    </Link>
  );
}

export default ShoppingCartLink;
