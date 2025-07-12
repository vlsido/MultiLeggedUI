import { Link, useLocation } from "react-router";
import { ShoppingCartIcon } from "../Icons/ShoppingCartIcon";
import { useAppSelector } from "~/hooks/reduxHooks";

function ShoppingCartLink() {
  const cart = useAppSelector((state) => state.cart.cartItems);

  const location = useLocation();

  function findPriceByAnimalId(id: number): number {
    const animal = cart.find((item) => item.animalId === id);

    if (animal) {
      const currentPackagePriceInCents =
        animal.animalPrices.find(
          (pricePackage) =>
            pricePackage.minQuantity <= animal.quantity &&
            (pricePackage.maxQuantity ?? Infinity) >= animal.quantity,
        )?.centsPerUnit ?? 0;

      return currentPackagePriceInCents;
    }
    return 0;
  }

  const price = cart.reduce(
    (total, item) => total + findPriceByAnimalId(item.animalId) * item.quantity,
    0,
  );

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
        <ShoppingCartIcon />${(price / 100).toFixed(2)}
        <div className="text-[16px] opacity-[0.5]">{cart.length} items</div>
      </div>
    </Link>
  );
}

export default ShoppingCartLink;
