import { useQuery } from "@tanstack/react-query";
import { useCallback, useId, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { fetchShippingLocations } from "~/api/api";
import { CheckmarkFilled } from "~/components/Icons/CheckmarkFilled";
import TextButton from "~/components/UI/buttons/TextButton/TextButton";
import { shippingCompanies } from "~/data/data";
import "react-phone-number-input/style.css";
import PhoneInput, { type Value } from "react-phone-number-input";
import { userMessageManager } from "~/managers/userMessageManager";
import type { Country } from "~/types/common";

function ShippingBody() {
  const navigate = useNavigate();

  const shippingLocationsQuery = useQuery({
    queryKey: ["shipping-locations"],
    queryFn: fetchShippingLocations,
  });

  const [shippingCompany, setShippingCompany] = useState<"DPD" | "Omniva" | "">(
    "",
  );

  const [country, setCountry] = useState<"EE" | "LV" | "LT">("EE");

  const [parcelMachine, setParcelMachine] = useState<string>("");

  const firstNameRef = useRef<string>("");

  const lastNameRef = useRef<string>("");

  const [phone, setPhone] = useState<Value | undefined>(undefined);

  const [isInputInvalid, setIsInputInvalid] = useState<boolean>(false);

  function handleGoCheckout() {
    if (
      firstNameRef.current === "" ||
      lastNameRef.current === "" ||
      phone == ""
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

  if (shippingLocationsQuery.error) {
    userMessageManager.showUserMessage(
      shippingLocationsQuery.error.message,
      "ERROR",
      3000,
    );
  }

  return (
    <div className="flex flex-1 p-5 flex-col items-center justify-center">
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
              onChange={(e) => setCountry(e.target.value as Country)}
              defaultValue={"EE"}
            >
              <option value={"EE"} id="EE">
                Estonia
              </option>
              <option value={"LV"} id="LV">
                Latvia
              </option>
              <option value={"LT"} id="LT">
                Lithuania
              </option>
            </select>
          </div>
          <div
            className={
              "flex flex-col gap-2.5 " +
              (shippingCompany === "" ? "opacity-50" : "")
            }
          >
            <select
              className="flex w-full border-1"
              disabled={shippingCompany === ""}
              onChange={(e) => setParcelMachine(e.target.value)}
              required
            >
              <option disabled selected>
                Choose parcel machine
              </option>
              {shippingCompany !== "" &&
                shippingLocationsQuery.isSuccess &&
                shippingLocationsQuery.data.map((data) => {
                  if (data.companyName !== shippingCompany) {
                    return null;
                  }

                  return data.locations.map((location) => {
                    if (location.countryCode !== country) return null;
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
        <div
          className={
            parcelMachine === "" ? "opacity-50 pointer-events-none" : undefined
          }
        >
          <h2 className="py-2.5 text-[18px] font-bold">
            Recipient information
          </h2>
          <div className="flex flex-col gap-1" onFocus={onFocus}>
            <label>First Name</label>
            <input
              id="first_name"
              name="first_name"
              className={
                "w-full border-1 rounded-md px-1 " +
                (isInputInvalid === true &&
                  firstNameRef.current === "" &&
                  "border-red-500")
              }
              onChange={(e) => {
                firstNameRef.current = e.target.value;
              }}
            />
            <label htmlFor="last_name">Last Name</label>
            <input
              id="last_name"
              name="last_name"
              className={
                "w-full border-1 rounded-md px-1 " +
                (isInputInvalid === true &&
                  lastNameRef.current === "" &&
                  "border-red-500")
              }
              onChange={(e) => {
                lastNameRef.current = e.target.value;
              }}
            />

            <label htmlFor="phone">Phone</label>
            <PhoneInput
              className="flex border-1 rounded-md pl-1 max-w-full"
              containerComponentProps={{ id: "phone", name: "phone" }}
              placeholder="Enter phone number"
              addInternationalOption={false}
              defaultCountry={country}
              value={phone}
              limitMaxLength={true}
              onChange={(value?: Value | undefined) => setPhone(value)}
            />
          </div>
          <div className="flex w-full justify-center md:justify-end mt-8">
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
  );
}

export default ShippingBody;
