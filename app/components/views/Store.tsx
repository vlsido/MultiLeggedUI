import { animalsData } from "~/data/data";
import { FiltersIcon } from "../icons/FiltersIcon";

function Store() {

  return (
    <div
      className="flex p-2.5 place-content-center overflow-y-auto"
    >
      <div className="flex flex-col items-end max-w-[1000px] gap-2.5">
        <button className="flex flex-row gap-1 text-black py-1 px-2 bg-yellow-100 rounded-full cursor-pointer drop-shadow-md">
          <FiltersIcon />
          Filters
        </button>
        <div className="flex flex-col gap-2.5">
          {animalsData.map((
            data, index
          ) => {
            return (
              <div
                key={index}
                className="bg-gray-100 rounded-xl">
                <div className="px-6 py-2 text-black font-bold">
                  {data.group}
                </div>
                <div className="flex px-4 py-4 gap-4 flex-wrap justify-center">
                  {data.animals.map((animal) => {
                    return (
                      <div key={animal.name} className="flex flex-col max-w-[400px] bg-gray-400 p-5 rounded-xl">
                        <div className="p-5 bg-gray-500 rounded-xl">
                          <p className="text-black">{animal.name}</p>
                          <img src={animal.imageUrl} />
                        </div>
                        <div className="text-black">
                          <p>Names: {animal.names}</p>
                          <p>Origin: {animal.origin}</p>
                          <p>Size: {animal.size}</p>
                          <p>Humidity: {animal.humidity}</p>
                          <p>Environment temp: {animal.environment}</p>
                          <p>Additional info: {animal.info}</p>
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
    </div>
  );
}

export default Store;
