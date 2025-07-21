import type { Route } from ".react-router/types/app/+types/root";
import { NavLink } from "react-router";
import { ArrowLeft } from "~/components/Icons/ArrowLeftIcon";
import { SharedColors } from "~/constants/colors";
import { useAppSelector } from "~/hooks/reduxHooks";

function CategoryBody({ params }: Route.LoaderArgs) {
  const categoriesAnimals = useAppSelector(
    (state) => state.animals.categoriesAnimals,
  );

  return (
    <div className="flex flex-1 flex-col w-full p-2.5 gap-2.5">
      <div className="w-full">
        <NavLink
          className="absolute cursor-pointer p-1 bg-yellow-600/80 rounded-full"
          to={"/store"}
        >
          <ArrowLeft color={SharedColors["black-500"]} />
        </NavLink>
      </div>
      <div className="flex flex-col self-center gap-2.5">
        {categoriesAnimals.map((categoryAnimals, index) => {
          if (
            params.categoryId !== "all" &&
            categoryAnimals.category !== params.categoryId
          )
            return null;

          return (
            <div key={index} className="bg-gray-100/50 rounded-xl">
              <div className="px-6 py-2 text-black font-bold">
                {categoryAnimals.category.toUpperCase()}
              </div>
              <div className="flex px-4 py-4 gap-4 flex-wrap justify-center">
                {categoryAnimals.animals.map((data) => {
                  return (
                    <div
                      key={data.id}
                      className="flex flex-col max-w-[400px] bg-gray-400 p-5 rounded-xl gap-2.5 drop-shadow-xl"
                    >
                      <div className="flex flex-col gap-3 p-5 bg-gray-500 rounded-xl items-center">
                        <p className="text-black text-center">{data.name}</p>
                        <img
                          className="h-[300px] w-[300px] object-cover"
                          src={data.imageUrl}
                        />
                      </div>
                      <div className="flex flex-col gap-2 h-full text-black">
                        <div className="flex gap-1 justify-evenly">
                          {data.animalPrices.map((pricePackage) => {
                            return (
                              <div
                                key={pricePackage.id}
                                className="text-[16px]"
                              >
                                <div>
                                  {pricePackage.maxQuantity ? (
                                    <p>
                                      {pricePackage.minQuantity} -{" "}
                                      {pricePackage.maxQuantity} {data.form}
                                    </p>
                                  ) : (
                                    <p>
                                      {">="} {pricePackage.minQuantity}{" "}
                                      {data.form}
                                    </p>
                                  )}
                                </div>
                                <p className={"text-[20px] font-bold"}>
                                  €
                                  {(pricePackage.centsPerUnit / 100).toFixed(2)}
                                  <span className="text-[12px] font-normal text-nowrap">
                                    /per 1
                                  </span>
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <NavLink
                        className="px-10 py-2.5 self-end rounded-full bg-black-500 text-white cursor-pointer"
                        to={`/store/product/${data.id}?return_page=${params.categoryId}`}
                      >
                        Product page
                      </NavLink>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryBody;
