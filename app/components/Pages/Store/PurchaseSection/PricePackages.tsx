import QuantitySelectorPill from "~/components/UI/selectors/QuantitySelectorPill";
import type { Animal } from "~/types/common";

interface PricePackagesProps {
  animal: Animal;
  quantity: number;
  onQuantityChange: (value: number) => void;
}

function PricePackages(props: PricePackagesProps) {
  const currentPackagePriceInCents =
    props.animal.animalPrices.find(
      (pricePackage) =>
        pricePackage.minQuantity <= props.quantity &&
        (pricePackage.maxQuantity ?? Infinity) >= props.quantity,
    )?.centsPerUnit ?? 0;

  return (
    <div
      id={"selectors"}
      className="flex flex-col bg-gray-500 gap-1.25 p-5 w-full rounded-4xl"
    >
      <div id="price_packages" className="flex gap-2.5 justify-evenly">
        {props.animal.animalPrices.map((pricePackage) => {
          const isCurrentPackage =
            pricePackage.minQuantity <= props.quantity &&
            (pricePackage.maxQuantity ?? Infinity) >= props.quantity;

          return (
            <div key={pricePackage.id} className="text-[16px]">
              <div>
                {pricePackage.maxQuantity ? (
                  <p>
                    {pricePackage.minQuantity} - {pricePackage.maxQuantity}{" "}
                    {props.animal.form}
                  </p>
                ) : (
                  <p>
                    {">="} {pricePackage.minQuantity} {props.animal.form}
                  </p>
                )}
              </div>
              <p
                className={
                  isCurrentPackage
                    ? "text-[20px] font-bold text-red-800"
                    : "text-[20px] font-bold"
                }
              >
                ${(pricePackage.centsPerUnit / 100).toFixed(2)}
                <span className="text-[12px] font-normal text-nowrap">
                  /per 1
                </span>
              </p>
            </div>
          );
        })}
      </div>
      <div className="h-[2px] w-full bg-black" />
      <div className="flex py-1.25 justify-between">
        <p className="font-bold">Quantity</p>
        <QuantitySelectorPill
          value={props.quantity}
          onChange={(value: number) => props.onQuantityChange(value)}
          minQuantity={props.animal.animalPrices[0].minQuantity}
          maxQuantity={props.animal.units}
        />
      </div>
      <div className="h-[2px] w-full bg-black" />
      <div className="flex py-1.25 justify-between items-center">
        <p className="font-bold">Sub-total</p>
        <p className="font-bold text-[18px]">
          ${((currentPackagePriceInCents / 100) * props.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default PricePackages;
