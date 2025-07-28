import type { CartItemProps } from "~/redux/slices/cartSlice";

export function findPriceByProductId(
  cartItems: CartItemProps[],
  id: number,
): number {
  const product = cartItems.find((item) => item.productId === id);

  if (product) {
    const currentPackagePriceInCents =
      product.productPrices.find(
        (pricePackage) =>
          pricePackage.minQuantity <= product.quantity &&
          (pricePackage.maxQuantity ?? Infinity) >= product.quantity,
      )?.centsPerUnit ?? 0;

    return currentPackagePriceInCents;
  }
  return 0;
}

export function findCartPrice(cartItems: CartItemProps[]) {
  const price = cartItems.reduce(
    (total, item) =>
      total + findPriceByProductId(cartItems, item.productId) * item.quantity,
    0,
  );

  return price;
}
