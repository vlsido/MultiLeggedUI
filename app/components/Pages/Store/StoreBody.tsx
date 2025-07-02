import TextButton from "~/components/UI/buttons/TextButton";
import { useAppDispatch, useAppSelector } from "~/hooks/reduxHooks";
import Footer from "~/components/UI/Footer";
import {
  useCallback,
  useState
} from "react";
import { pushToCart } from "~/redux/slices/cartSlice";
import { ArrowLeft } from "~/components/Icons/ArrowLeftIcon";
import { ChevronIcon } from "~/components/Icons/ChevronIcon";
import type { AnimalCategory } from "~/types/common";
import RulerIcon from "~/components/Icons/RulerIcon";
import WorldIcon from "~/components/Icons/WorldIcon";
import HumidityIcon from "~/components/Icons/HumidityIcon";
import TemperatureIcon from "~/components/Icons/TemperatureIcon";
import PricePackages from "./PricePackages";

function StoreBody() {
  const categoriesAnimals = useAppSelector((state) => state.animals.categoriesAnimals);

  const dispatch = useAppDispatch();

  const [
    category,
    setCategory
  ] = useState<string>("");

  const handleAddToCart = useCallback(
    (
      animalId: number,
      priceId: number,
      units: number,
      name: string,
      imageUrl: string,
      form: string,
      category: AnimalCategory
    ) => {
      dispatch(pushToCart({ animalId, priceId, units, name, imageUrl, form, category, quantity: 1 }));
    },
    []
  );

  if (category === "") {
    return (
      <div
        className="flex flex-1 flex-col justify-between overflow-y-auto"
      >
        <div
          className="flex flex-1 justify-center items-center md:items-start p-2.5">
          <div
            className="flex flex-col p-2.5 max-w-[1000px] gap-2.5 text-black bg-gray-100 rounded-xl ">

            <h1 className="text-[20px] font-bold" >Categories</h1>
            <div
              className="flex flex-row flex-wrap justify-center gap-2.5 p-4">
              <button
                className="flex flex-col items-center cursor-pointer"
                onPointerUp={() => setCategory("ALL")}
              >
                <div className="px-6 font-bold">
                  <h3>ALL</h3>
                </div>
                <div className="flex gap-3 p-5 bg-gray-500 rounded-xl items-center">
                  <img className="h-32 w-32 rounded-full object-cover hover:scale-125" src={"/all_categories.png"} />
                </div>
              </button>
              {categoriesAnimals.map((
                categoryAnimals, index
              ) => {
                return (
                  <button
                    key={index}
                    className="flex flex-col items-center cursor-pointer"
                    onPointerUp={() => setCategory(categoryAnimals.category)}
                  >
                    <div className="px-6  font-bold">
                      <h3>{categoryAnimals.category.toUpperCase()}</h3>
                    </div>
                    <div className="flex gap-3 p-5 bg-gray-500 rounded-xl items-center">
                      <img className="h-32 w-32 rounded-full object-cover hover:scale-125" src={categoryAnimals.animals[0].imageUrl} />
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  console.log(categoriesAnimals);
  return (
    <div
      className="flex flex-1 flex-col justify-between overflow-y-auto"
    >
      <div
        className="flex flex-col w-full items-center p-2.5 self-center items-start max-w-[1000px] gap-2.5">
        <div className="w-full">
          <button
            className="cursor-pointer "
            onPointerUp={() => setCategory("")}>
            <ArrowLeft color={"white"} />
          </button>
        </div>
        <div
          className="flex flex-col self-center gap-2.5">
          {categoriesAnimals.map((
            categoryAnimals, index
          ) => {
            if (category !== "ALL" && categoryAnimals.category !== category) return null;

            return (
              <div
                key={index}
                className="bg-gray-100 rounded-xl">
                <div className="px-6 py-2 text-black font-bold">
                  {categoryAnimals.category.toUpperCase()}
                </div>
                <div
                  className="flex px-4 py-4 gap-4 flex-wrap justify-center">
                  {categoryAnimals.animals.map((data) => {
                    return (
                      <div
                        key={data.id}
                        className="flex flex-col max-w-[400px] bg-gray-400 p-5 rounded-xl">
                        <div className="flex flex-col gap-3 p-5 bg-gray-500 rounded-xl items-center">
                          <p className="text-black text-center">{data.name}</p>
                          <img src={data.imageUrl} />
                        </div>
                        <div
                          className="flex flex-col h-full justify-between text-black">
                          <div
                            className="flex flex-col py-2 gap-1 whitespace-pre-line">
                            {data.origin && (
                              <div className="flex gap-1.5">
                                <WorldIcon />
                                <p>Origin <span className="font-bold"> {data.origin}</span></p>
                              </div>
                            )}
                            {data.size && (
                              <div className="flex gap-1.5">
                                <RulerIcon />
                                <p>Size up to <span className="font-bold"> {data.size}</span></p>
                              </div>
                            )}
                            {data.humidity && (
                              <div className="flex gap-1.5">
                                <HumidityIcon />
                                <p>Humidity <span className="font-bold"> {data.humidity}</span></p>
                              </div>
                            )}
                            {data.temperature && (
                              <div className="flex gap-1.5">
                                <TemperatureIcon />
                                <p>Environment temp<span className="font-bold"> {data.temperature}</span></p>
                              </div>
                            )}

                            <ChevronIcon />
                            <p>{data.description}</p>
                          </div>
                          <div className="flex flex-col w-full my-2 gap-2 items-center text-[20px]">
                            <PricePackages animal={data} />
                            <TextButton
                              ariaLabel={`Add ${data.name} to cart`}
                              text="Add to cart"
                              containerClassName="px-10 py-4 w-full rounded-full bg-black-500 text-white cursor-pointer drop-shadow-md"
                              textClassName="text-[20px]"
                              onPress={() => { }} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StoreBody;
