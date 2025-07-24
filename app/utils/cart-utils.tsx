import type { CartItemProps } from "~/redux/slices/cartSlice";

export function findPriceByAnimalId(
  cartItems: CartItemProps[],
  id: number,
): number {
  const animal = cartItems.find((item) => item.animalId === id);

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

export function findCartPrice(cartItems: CartItemProps[]) {
  const price = cartItems.reduce(
    (total, item) =>
      total + findPriceByAnimalId(cartItems, item.animalId) * item.quantity,
    0,
  );

  return price;
}
