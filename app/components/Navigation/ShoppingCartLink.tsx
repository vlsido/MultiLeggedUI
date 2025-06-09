import { Link, useLocation } from "react-router";
import { ShoppingCartIcon } from "../icons/ShoppingCartIcon";
import { useAppSelector } from "~/hooks/reduxHooks";

function ShoppingCartLink() {
  const cart = useAppSelector((state) => state.cart.cartItems);

  const location = useLocation();

  const price = cart.reduce(
    (
      accum, curValue
    ) => {
      accum += 1;
      return accum;
    },
    0
  );

  return (
    <Link
      to={{ pathname: "/cart" }}
    >
      <div
        className={"flex flex-row px-[10px] py-[5px] gap-[10px] text-black text-[20px] rounded-full items-center " + (location.pathname === "/cart" ? "bg-white ring-2 ring-black" : "bg-gray-200")}>

        <ShoppingCartIcon />
        ${price}
        <div className="text-[16px] opacity-[0.5]">
          {cart.length} items
        </div>
      </div>
    </Link>
  );
}

export default ShoppingCartLink;
