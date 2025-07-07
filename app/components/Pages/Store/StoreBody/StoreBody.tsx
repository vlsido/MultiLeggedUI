import { useAppDispatch, useAppSelector } from "~/hooks/reduxHooks";
import Footer from "~/components/UI/Footer";
import { useCallback, useState } from "react";
import { ArrowLeft } from "~/components/Icons/ArrowLeftIcon";
import RulerIcon from "~/components/Icons/RulerIcon";
import WorldIcon from "~/components/Icons/WorldIcon";
import HumidityIcon from "~/components/Icons/HumidityIcon";
import TemperatureIcon from "~/components/Icons/TemperatureIcon";
import PurchaseView from "../Card/PurchaseSection/PurchaseView";
import { motion } from "motion/react";
import Description from "../Card/Description";
import {
  clearUserMessage,
  showUserMessage,
} from "~/redux/slices/userMessageSlice";
import { SharedColors } from "~/constants/colors";

function StoreBody() {
  const categoriesAnimals = useAppSelector(
    (state) => state.animals.categoriesAnimals,
  );

  const [category, setCategory] = useState<string>("");

  if (category === "") {
    return (
      <div className="flex flex-1 flex-col justify-between overflow-y-auto">
        <div className="flex flex-1 justify-center items-center md:items-start p-2.5">
          <div className="flex flex-col p-2.5 max-w-[1000px] gap-2.5 text-black md:mt-[10%] bg-gray-100 rounded-xl">
            <h1 className="text-[20px] font-bold">Categories</h1>
            <div className="flex flex-row flex-wrap justify-center gap-2.5 p-4">
              <motion.button
                className="flex flex-col items-center cursor-pointer"
                onPointerUp={() => setCategory("ALL")}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.5 },
                }}
              >
                <div className="px-6 font-bold">
                  <h3>ALL</h3>
                </div>
                <div className="flex gap-3 p-5 bg-gray-500 ring-white ring-1 rounded-xl items-center">
                  <img
                    className="h-32 w-32 rounded-full object-cover"
                    src={"/all_categories.png"}
                  />
                </div>
              </motion.button>
              {categoriesAnimals.map((categoryAnimals, index) => {
                return (
                  <motion.button
                    key={index}
                    className="flex flex-col items-center cursor-pointer"
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.5 },
                    }}
                    onPointerUp={() => setCategory(categoryAnimals.category)}
                  >
                    <div className="px-6 font-bold">
                      <h3>{categoryAnimals.category.toUpperCase()}</h3>
                    </div>
                    <div className="flex gap-3 p-5 bg-gray-500 ring-white ring-1 rounded-xl items-center">
                      <img
                        className="h-32 w-32 rounded-full object-cover"
                        src={categoryAnimals.animals[0].imageUrl}
                      />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col justify-between overflow-y-auto">
      <div className="flex flex-col w-full items-center p-2.5 self-center items-start max-w-[1000px] gap-2.5">
        <div className="w-full">
          <button
            className="absolute cursor-pointer p-1 bg-yellow-600/80 rounded-full"
            onPointerUp={() => setCategory("")}
          >
            <ArrowLeft color={SharedColors["black-500"]} />
          </button>
        </div>
        <div className="flex flex-col self-center gap-2.5">
          {categoriesAnimals.map((categoryAnimals, index) => {
            if (category !== "ALL" && categoryAnimals.category !== category)
              return null;

            return (
              <div key={index} className="bg-gray-100 rounded-xl">
                <div className="px-6 py-2 text-black font-bold">
                  {categoryAnimals.category.toUpperCase()}
                </div>
                <div className="flex px-4 py-4 gap-4 flex-wrap justify-center">
                  {categoryAnimals.animals.map((data) => {
                    return (
                      <div
                        key={data.id}
                        className="flex flex-col max-w-[400px] bg-gray-400 p-5 rounded-xl"
                      >
                        <div className="flex flex-col gap-3 p-5 bg-gray-500 rounded-xl items-center">
                          <p className="text-black text-center">{data.name}</p>
                          <img src={data.imageUrl} />
                        </div>
                        <div className="flex flex-col h-full justify-between text-black">
                          <div className="flex flex-col py-2 gap-1 whitespace-pre-line">
                            {data.origin && (
                              <div className="flex gap-1.5">
                                <WorldIcon />
                                <p>
                                  Origin{" "}
                                  <span className="font-bold">
                                    {" "}
                                    {data.origin}
                                  </span>
                                </p>
                              </div>
                            )}
                            {data.size && (
                              <div className="flex gap-1.5">
                                <RulerIcon />
                                <p>
                                  Size up to{" "}
                                  <span className="font-bold">
                                    {" "}
                                    {data.size}
                                  </span>
                                </p>
                              </div>
                            )}
                            {data.humidity && (
                              <div className="flex gap-1.5">
                                <HumidityIcon />
                                <p>
                                  Humidity{" "}
                                  <span className="font-bold">
                                    {" "}
                                    {data.humidity}
                                  </span>
                                </p>
                              </div>
                            )}
                            {data.temperature && (
                              <div className="flex gap-1.5">
                                <TemperatureIcon />
                                <p>
                                  Environment temp
                                  <span className="font-bold">
                                    {" "}
                                    {data.temperature}
                                  </span>
                                </p>
                              </div>
                            )}
                            <Description text={data.description} />
                          </div>
                          <PurchaseView animal={data} />
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
