import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { CheckmarkFilled } from "~/components/Icons/CheckmarkFilled";
import TextButton from "~/components/UI/buttons/TextButton/TextButton";
import Footer from "~/components/UI/Footer";
import { parcelVendors } from "~/data/data";
import { useAppSelector } from "~/hooks/reduxHooks";

function Checkout() {
  const cart = useAppSelector((state) => state.cart.cartItems);

  const [parcelVendor, setParcelVendor] = useState<"Omniva" | "DPD" | "">("");

  const navigate = useNavigate();

  const handleGoPayment = useCallback(() => {
    return navigate("/cart/payment");
  }, []);

  return (
    <div className="flex flex-1 flex-col justify-between overflow-y-auto">
      <div className="flex flex-1 p-5 justify-center items-center flex-col gap-2.5">
        <div className="flex flex-col gap-2.5 p-5 bg-white text-black">
          <h2 className="py-2.5 text-[18px] font-bold">Choose parcel vendor</h2>
          <div className="gap-5">
            <div className="flex flex-wrap gap-2">
              {parcelVendors.map((vendor) => {
                return (
                  <button
                    key={vendor.name}
                    className={
                      "flex flex-col relative border-2 p-2 cursor-pointer " +
                      (parcelVendor === vendor.name && "border-green-500")
                    }
                    onPointerUp={() => setParcelVendor(vendor.name)}
                  >
                    <img src={vendor.imageUrl} />
                    <p className="self-end">
                      ${(vendor.priceInCents / 100).toFixed(2)}
                    </p>
                    {parcelVendor === vendor.name && (
                      <div className="absolute top-2 right-2">
                        <CheckmarkFilled />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            <label>
              Select parcel machine:
              <select onChange={(e) => console.log("e", e.target.value)}>
                <option value="asd">ASD</option>
                <option value="dsa">DSA</option>
              </select>
            </label>
          </div>
          <h1>Recipient information</h1>
          <div className="flex flex-col">
            <div className="flex py-2.5">
              <label className="min-w-[100px]">First Name</label>
              <input className="border-1 rounded-md" />
            </div>
            <div className="flex py-2.5">
              <label className="min-w-[100px]">Last Name</label>
              <input className="border-1 rounded-md" />
            </div>
            <div className="flex py-2.5">
              <label className="min-w-[100px]">Phone</label>
              <input className="border-1 rounded-md" />
            </div>
          </div>
        </div>
        <TextButton
          text={"Proceed to payment"}
          ariaLabel={"Go to payment"}
          containerClassName="bg-yellow-100 w-full max-w-[250px] p-2.5 rounded-full drop-shadow-md cursor-pointer"
          textClassName="text-black-500"
          onPress={handleGoPayment}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
