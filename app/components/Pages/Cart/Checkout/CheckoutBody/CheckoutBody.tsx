import { useQuery } from "@tanstack/react-query";
import { useCallback, useId, useState } from "react";
import { useNavigate } from "react-router";
import { fetchParcelMachines } from "~/api/api";
import { CheckmarkFilled } from "~/components/Icons/CheckmarkFilled";
import TextButton from "~/components/UI/buttons/TextButton/TextButton";
import { parcelVendors } from "~/data/data";

function CheckoutBody() {
  const navigate = useNavigate();

  const parcelMachinesQuery = useQuery({
    queryKey: ["parcelMachines"],
    queryFn: fetchParcelMachines,
  });

  const [parcelVendor, setParcelVendor] = useState<string>("");

  const [country, setCountry] = useState<string>("");

  const [parcelMachine, setParcelMachine] = useState<string>("");

  const handleGoPayment = useCallback(() => {
    return navigate("/cart/payment");
  }, []);

  const countrySelectId = useId();

  return (
    <div className="flex flex-1 flex-col justify-between overflow-y-auto">
      <div className="flex flex-1 p-5 justify-center items-center flex-col gap-2.5">
        <div className="flex flex-col gap-2.5 p-5 bg-white text-black">
          <h2 className="py-2.5 text-[18px] font-bold">Choose parcel vendor</h2>
          <div className="flex flex-col gap-5">
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
            <div
              className={
                "flex flex-col gap-2.5 " +
                (parcelVendor === "" ? "opacity-50" : "")
              }
            >
              <select
                id={countrySelectId}
                className="flex border-1"
                disabled={parcelVendor === ""}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value={""} disabled selected>
                  Select country
                </option>
                <option value={"EE"}>Estonia</option>
                <option value={"LV"}>Latvia</option>
                <option value={"LT"}>Lithuania</option>
              </select>
            </div>
            <div
              className={
                "flex flex-col gap-2.5 " + (country === "" ? "opacity-50" : "")
              }
            >
              <select
                className="flex border-1"
                disabled={country === ""}
                onChange={(e) => setParcelMachine(e.target.value)}
                required
              >
                <option value="" disabled selected>
                  Choose parcel machine
                </option>
                {parcelVendor !== "" &&
                  parcelMachinesQuery.isSuccess &&
                  parcelMachinesQuery.data.map((machine) => {
                    if (
                      machine.company !== parcelVendor ||
                      machine.country !== country
                    )
                      return null;
                    return <option value={machine.name}>{machine.name}</option>;
                  })}
              </select>
            </div>
          </div>
          <div className={parcelMachine === "" ? "opacity-50" : undefined}>
            <h2 className="py-2.5 text-[18px] font-bold">
              Recipient information
            </h2>
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

            <div className="flex w-full justify-end">
              <TextButton
                text={"Proceed to payment"}
                ariaLabel={"Go to payment"}
                containerClassName="bg-black-500 w-full max-w-[250px] p-2.5 rounded-full drop-shadow-md cursor-pointer"
                textClassName="text-white"
                onPress={handleGoPayment}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutBody;
