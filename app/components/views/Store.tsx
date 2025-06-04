import { type AnimalGroup, animalsData } from "~/data/data";
import { FiltersIcon } from "../icons/FiltersIcon";
import TextButton from "../buttons/TextButton";
import { useAppSelector } from "~/hooks/reduxHooks";
import Footer from "./Footer";
import FiltersModal from "../modals/FiltersModal";
import useToggle from "~/hooks/useToggle";
import {
  useCallback,
  useState
} from "react";

function Store() {
  const cart = useAppSelector((state) => state.cart.cartItems);

  const [
    isFiltersModalVisible,
    toggleFiltersModal
  ] = useToggle();

  const [
    animals,
    setAnimals
  ] = useState<AnimalGroup[]>(animalsData);

  const applyFilters = useCallback(
    (filtersArr: string[]) => {
      toggleFiltersModal(false);

      if (filtersArr.length === 0) {
        setAnimals(animalsData);
        return;
      }

      const filteredAnimals = animalsData.filter((data) => {

        // TODO: consider in stock/out of stock

        return filtersArr.includes(data.group)
      });

      setAnimals(filteredAnimals);
    },
    []
  );

  return (
    <div
      data-testid="STORE.CONTAINER:VIEW"
      className="flex flex-1 flex-col justify-between overflow-y-auto"
    >
      <FiltersModal
        isVisible={isFiltersModalVisible}
        onApply={applyFilters}
      />
      <div
        data-testid="STORE.CONTAINER.BODY:VIEW"
        className="flex flex-col p-2.5 self-center items-end max-w-[1000px] gap-2.5">
        <button
          className="flex flex-row gap-1 text-black py-1 px-2 bg-yellow-100 rounded-full cursor-pointer drop-shadow-md"
          onPointerDown={() => toggleFiltersModal()}
        >
          <FiltersIcon />
          Filters
        </button>
        <div
          data-testid="STORE.CONTAINER.BODY.ANIMAL_DATA:LIST"
          className="flex flex-col gap-2.5">
          {animals.map((
            data, index
          ) => {
            return (
              <div
                key={index}
                data-testid={`STORE.CONTAINER.BODY.ANIMAL_DATA:ITEM-${index}`}
                className="bg-gray-100 rounded-xl">
                <div className="px-6 py-2 text-black font-bold">
                  {data.group}
                </div>
                <div
                  data-testid={"STORE.CONTAINER.BODY.ANIMAL_DATA.ANIMAL:LIST"}
                  className="flex px-4 py-4 gap-4 flex-wrap justify-center">
                  {data.animals.map((
                    animal, index
                  ) => {
                    return (
                      <div
                        key={animal.name}
                        data-testid={`STORE.CONTAINER.BODY.ANIMAL_DATA.ANIMAL:ITEM-${index}`}
                        className="flex flex-col max-w-[400px] bg-gray-400 p-5 rounded-xl">
                        <div className="flex flex-col gap-3 p-5 bg-gray-500 rounded-xl items-center">
                          <p className="text-black text-center">{animal.name}</p>
                          <img src={animal.imageUrl} />
                        </div>
                        <div
                          data-testid={`STORE.CONTAINER.BODY.ANIMAL_DATA.ANIMAL.ITEM-${index}.INFO:VIEW`}
                          className="flex flex-col h-full justify-between text-black">
                          <div
                            className="flex flex-col py-2 gap-1">
                            <p>Names: {animal.names}</p>
                            <p>Origin: {animal.origin}</p>
                            <p>Size: {animal.size}</p>
                            <p>Humidity: {animal.humidity}</p>
                            <p>Environment temp: {animal.environment}</p>
                            <p>Additional info: {animal.info}</p>
                          </div>
                          <div className="flex flex-col w-full my-2 gap-2 items-center text-[20px]">
                            {animal.ppu}$/10pcs
                            <TextButton
                              testId={`STORE.CONTAINER.BODY.ANIMAL_DATA.ANIMAL.ITEM-${index}.INFO.ADD_TO_CART:BUTTON`}
                              ariaLabel={`Add ${animal.name} to cart`}
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

export default Store;
