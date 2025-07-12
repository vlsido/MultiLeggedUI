import type { Route } from ".react-router/types/app/+types/root";
import { Navigate, NavLink } from "react-router";
import { ArrowLeft } from "~/components/Icons/ArrowLeftIcon";
import HumidityIcon from "~/components/Icons/HumidityIcon";
import RulerIcon from "~/components/Icons/RulerIcon";
import TemperatureIcon from "~/components/Icons/TemperatureIcon";
import WorldIcon from "~/components/Icons/WorldIcon";
import { SharedColors } from "~/constants/colors";
import { useAppSelector } from "~/hooks/reduxHooks";
import PurchaseView from "../../Card/PurchaseSection/PurchaseView";
import { userMessageManager } from "~/managers/userMessageManager";
import { useCallback, useEffect, useState } from "react";

function ProductBody({ params }: Route.LoaderArgs) {
  const categoriesAnimals = useAppSelector(
    (state) => state.animals.categoriesAnimals,
  );

  const data = categoriesAnimals
    .flatMap((category) => category.animals)
    .find((animal) => animal.id.toString() === params.productId);

  const [shouldRedirect, setShouldRedirect] = useState<boolean>(false);

  useEffect(() => {
    if (data === undefined) {
      userMessageManager.showUserMessage(
        "Product couldn't be found",
        "ERROR",
        3000,
      );
      setShouldRedirect(true);
    }
  }, [data]);

  const getBackLink = useCallback(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const returnPage = urlParams.get("return_page");

    if (returnPage === "cart") return "/cart";

    if (returnPage) return `/store/category/${returnPage}`;

    return "/store";
  }, []);

  if (shouldRedirect) {
    return <Navigate to={getBackLink()} />;
  }

  if (data === undefined) {
    return null;
  }

  return (
    <div className="flex flex-1 flex-col w-full p-2.5 gap-2.5">
      <div className="w-full">
        <NavLink
          className="absolute cursor-pointer p-1 bg-yellow-600/80 rounded-full"
          to={getBackLink()}
        >
          <ArrowLeft color={SharedColors["black-500"]} />
        </NavLink>
      </div>
      <div className="flex flex-col self-center gap-2.5">
        <div
          key={data.id}
          className="flex flex-col max-w-[400px] md:max-w-[800px] bg-gray-400/50 p-5 rounded-xl"
        >
          <div className="flex flex-col gap-3 p-5 bg-gray-500 rounded-xl items-center">
            <p className="text-black text-center text-[20px]">{data.name}</p>
            <div className="flex flex-col md:flex-row gap-5 text-black">
              <div className="flex h-[300px] min-w-[300px]">
                <img
                  className="h-[300px] w-[300px] object-cover"
                  src={data.imageUrl}
                />
              </div>

              <div className="flex flex-col py-2 gap-1 whitespace-pre-line">
                {data.origin && (
                  <div className="flex gap-1.5">
                    <WorldIcon />
                    <p>
                      Origin <span className="font-bold"> {data.origin}</span>
                    </p>
                  </div>
                )}
                {data.size && (
                  <div className="flex gap-1.5">
                    <RulerIcon />
                    <p>
                      Size up to <span className="font-bold"> {data.size}</span>
                    </p>
                  </div>
                )}
                {data.humidity && (
                  <div className="flex gap-1.5">
                    <HumidityIcon />
                    <p>
                      Humidity{" "}
                      <span className="font-bold"> {data.humidity}</span>
                    </p>
                  </div>
                )}
                {data.temperature && (
                  <div className="flex gap-1.5">
                    <TemperatureIcon />
                    <p>
                      Environment temp
                      <span className="font-bold"> {data.temperature}</span>
                    </p>
                  </div>
                )}

                <div className="p-4 italic max-w-[300px] drop-shadow-md">
                  <p>{data.description}</p>
                </div>
              </div>
            </div>
          </div>
          <PurchaseView animal={data} />
        </div>
      </div>
    </div>
  );
}

export default ProductBody;
