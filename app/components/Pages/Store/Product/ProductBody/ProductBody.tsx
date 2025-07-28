import type { Route } from ".react-router/types/app/+types/root";
import { Navigate, NavLink, useSearchParams } from "react-router";
import { ArrowLeft } from "~/components/Icons/ArrowLeftIcon";
import HumidityIcon from "~/components/Icons/HumidityIcon";
import RulerIcon from "~/components/Icons/RulerIcon";
import TemperatureIcon from "~/components/Icons/TemperatureIcon";
import WorldIcon from "~/components/Icons/WorldIcon";
import { SharedColors } from "~/constants/colors";
import { useAppSelector } from "~/hooks/reduxHooks";
import PurchaseView from "../../Card/PurchaseSection/PurchaseView";
import { userMessageManager } from "~/managers/userMessageManager";
import { useMemo } from "react";

function ProductBody({ params }: Route.LoaderArgs) {
  const categoriesAnimals = useAppSelector(
    (state) => state.animals.categoriesAnimals,
  );

  const [searchParams] = useSearchParams();

  const data = useMemo(
    () =>
      categoriesAnimals
        .flatMap((category) => category.animals)
        .find((animal) => animal.id.toString() === params.productId),
    [],
  );

  function getBackLink() {
    const returnPage = searchParams.get("r");

    if (returnPage === "cart") return "/cart";

    if (returnPage) return `/store/category/${returnPage}`;

    return "/store";
  }

  if (data === undefined) {
    userMessageManager.showUserMessage(
      "Product couldn't be found",
      "ERROR",
      5000,
    );

    return <Navigate to={getBackLink()} />;
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
      <div
        key={data.id}
        className="flex flex-col self-center md:max-w-[800px] bg-gray-400/50 p-5 rounded-xl"
      >
        <div className="flex flex-col gap-3 p-5 bg-gray-500 rounded-xl items-center">
          <p className="text-black text-center text-[20px]">{data.name}</p>
          <div className="flex flex-col md:flex-row gap-5 text-black">
            <img
              className="h-[300px] w-[300px] object-cover"
              src={data.imageUrl}
            />
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
                    Humidity <span className="font-bold"> {data.humidity}</span>
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
  );
}

export default ProductBody;
