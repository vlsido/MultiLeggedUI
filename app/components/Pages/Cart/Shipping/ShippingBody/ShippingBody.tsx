import { useQuery } from "@tanstack/react-query";
import { useCallback, useId, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { fetchShippingLocations } from "~/api/api";
import { CheckmarkFilled } from "~/components/Icons/CheckmarkFilled";
import TextButton from "~/components/UI/buttons/TextButton/TextButton";
import { shippingCompanies } from "~/data/data";

function ShippingBody() {
  const navigate = useNavigate();

  const shippingLocationsQuery = useQuery({
    queryKey: ["shipping-locations"],
    queryFn: fetchShippingLocations,
  });

  const [shippingCompany, setShippingCompany] = useState<string>("");

  const [country, setCountry] = useState<string>("EE");

  const [parcelMachine, setParcelMachine] = useState<string>("");

  const firstNameRef = useRef<string>("");

  const lastNameRef = useRef<string>("");

  const phoneRef = useRef<string>("");

  const [isInputInvalid, setIsInputInvalid] = useState<boolean>(false);

  function handleGoCheckout() {
    if (
      firstNameRef.current === "" ||
      lastNameRef.current === "" ||
      phoneRef.current === ""
    ) {
      setIsInputInvalid(true);
      return;
    }
    return navigate("/cart/checkout");
  }

  const onFocus = useCallback(() => {
    setIsInputInvalid(false);
  }, []);

  const countrySelectId = useId();

  return (
    <div className="flex flex-1 flex-col justify-between overflow-auto">
      <div className="flex flex-1 justify-center items-center flex-col gap-2.5">
        <div className="flex flex-col gap-2.5 p-5 bg-white rounded-3xl text-black">
          <h2 className="py-2.5 text-[18px] font-bold">Choose parcel vendor</h2>
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap gap-2">
              {shippingCompanies.map((vendor) => {
                return (
                  <button
                    key={vendor.name}
                    className={
                      "flex flex-col relative border-2 p-2 cursor-pointer " +
                      (shippingCompany === vendor.name && "border-green-500")
                    }
                    onPointerUp={() => setShippingCompany(vendor.name)}
                  >
                    <img src={vendor.imageUrl} />
                    <p className="self-end">
                      €{(vendor.priceInCents / 100).toFixed(2)}
                    </p>
                    {shippingCompany === vendor.name && (
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
                (shippingCompany === "" ? "opacity-50" : "")
              }
            >
              <select
                id={countrySelectId}
                className="flex border-1"
                disabled={shippingCompany === ""}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value={"EE"} selected>
                  Estonia
                </option>
                <option value={"LV"}>Latvia</option>
                <option value={"LT"}>Lithuania</option>
              </select>
            </div>
            <div
              className={
                "flex flex-col gap-2.5 " +
                (shippingCompany === "" ? "opacity-50" : "")
              }
            >
              <select
                className="flex border-1"
                disabled={shippingCompany === ""}
                onChange={(e) => setParcelMachine(e.target.value)}
                required
              >
                <option value="" disabled selected>
                  Choose parcel machine
                </option>
                {shippingCompany !== "" &&
                  shippingLocationsQuery.isSuccess &&
                  shippingLocationsQuery.data.map((data) => {
                    if (data.companyName !== shippingCompany) {
                      return null;
                    }

                    return data.locations.map((location) => {
                      if (location.countryCode !== country) {
                        return null;
                      }

                      return (
                        <option key={location.name} value={location.name}>
                          {location.name}
                        </option>
                      );
                    });
                  })}
              </select>
            </div>
          </div>
          <div className={parcelMachine === "" ? "opacity-50" : undefined}>
            <h2 className="py-2.5 text-[18px] font-bold">
              Recipient information
            </h2>
            <div className="flex flex-col" onFocus={onFocus}>
              <div className="flex py-2.5">
                <label className="min-w-[100px]">First Name</label>
                <input
                  className={
                    "border-1 rounded-md px-1 " +
                    (isInputInvalid === true &&
                      firstNameRef.current === "" &&
                      "border-red-500")
                  }
                  disabled={parcelMachine === ""}
                  onChange={(e) => {
                    firstNameRef.current = e.target.value;
                  }}
                />
              </div>
              <div className="flex py-2.5">
                <label className="min-w-[100px]">Last Name</label>
                <input
                  className={
                    "border-1 rounded-md px-1 " +
                    (isInputInvalid === true &&
                      lastNameRef.current === "" &&
                      "border-red-500")
                  }
                  disabled={parcelMachine === ""}
                  onChange={(e) => {
                    lastNameRef.current = e.target.value;
                  }}
                />
              </div>
              <div className="flex py-2.5">
                <label className="min-w-[100px]">Phone</label>
                <input
                  className={
                    "border-1 rounded-md px-1 " +
                    (isInputInvalid === true &&
                      phoneRef.current === "" &&
                      "border-red-500")
                  }
                  disabled={parcelMachine === ""}
                  type="tel"
                  onChange={(e) => {
                    phoneRef.current = e.target.value;
                  }}
                />
              </div>
            </div>
            <div className="flex w-full justify-end">
              <TextButton
                text={"Proceed to checkout"}
                ariaLabel={"Go to checkout"}
                containerClassName="bg-black-500 w-full max-w-[250px] p-2.5 rounded-full drop-shadow-md cursor-pointer"
                textClassName="text-white"
                onPress={handleGoCheckout}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingBody;
