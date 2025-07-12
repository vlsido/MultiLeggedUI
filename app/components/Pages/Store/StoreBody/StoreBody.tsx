import { useAppSelector } from "~/hooks/reduxHooks";
import { useState } from "react";
import { motion } from "motion/react";
import { Navigate } from "react-router";

function StoreBody() {
  const categoriesAnimals = useAppSelector(
    (state) => state.animals.categoriesAnimals,
  );

  const [category, setCategory] = useState<string>("");

  if (category !== "") {
    return <Navigate to={`category/${category}`} />;
  }

  return (
    <div className="flex flex-1 justify-center items-center md:items-start p-2.5">
      <div className="flex flex-col p-2.5 max-w-[1000px] gap-2.5 text-black md:mt-[10%] bg-gray-100 rounded-xl">
        <h1 className="text-[20px] font-bold">Categories</h1>
        <div className="flex flex-row flex-wrap justify-center gap-2.5 p-4">
          <motion.button
            className="flex flex-col items-center cursor-pointer"
            onPointerUp={() => setCategory("all")}
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
  );
}

export default StoreBody;
