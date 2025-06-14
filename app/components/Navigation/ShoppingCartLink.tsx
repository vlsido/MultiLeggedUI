import { Link, useLocation } from "react-router";
import { ShoppingCartIcon } from "../Icons/ShoppingCartIcon";
import { useAppSelector } from "~/hooks/reduxHooks";

function ShoppingCartLink() {
  const cart = useAppSelector((state) => state.cart.cartItems);
  const species = useAppSelector((state) => state.species.species);

  const location = useLocation();

  function findPriceByPackId(id: number): number {
    for (const category of species) {
      for (const sp of category.data) {
        const pack = sp.speciesPacks.find((pack) => pack.id === id);
        if (pack) return pack.price;
      }
    }
    return 0;
  };

  const price = cart.reduce(
    (
      total, item
    ) => total + (findPriceByPackId(item.packId) * item.quantity),
    0
  );

  return (
    <Link
      to={{ pathname: "/cart" }}
    >
      <div
        className={"flex flex-row px-[10px] py-[5px] gap-[10px] text-black text-[20px] rounded-full items-center " + (location.pathname === "/cart" ? "bg-white ring-2 ring-black" : "bg-gray-200")}>

        <ShoppingCartIcon />
        ${(price / 100).toFixed(2)}
        <div className="text-[16px] opacity-[0.5]">
          {cart.length} items
        </div>
      </div>
    </Link>
  );
}

export default ShoppingCartLink;
