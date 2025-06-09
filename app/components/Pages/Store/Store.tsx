import { animalsData } from "~/data/data";
import TextButton from "~/components/ui/buttons/TextButton";
import { useAppDispatch } from "~/hooks/reduxHooks";
import Footer from "~/components/ui/Footer";
import {
  useCallback,
  useState
} from "react";
import { pushToCart } from "~/redux/slices/cartSlice";
import { ArrowLeft } from "~/components/icons/ArrowLeftIcon";

function Store() {
  const dispatch = useAppDispatch();

  const [
    group,
    setGroup
  ] = useState<string>("");

  const handleAddToCart = useCallback(
    (id: number) => {
      dispatch(pushToCart({ id: id, quantity: 1 }));
    },
    []
  );

  const chooseCategory = useCallback(
    (category: string) => {
      setGroup(category);
    },
    []
  );

  if (group === "") {
    return (
      <div
        data-testid="STORE.CONTAINER:VIEW"
        className="flex flex-1 flex-col p-2.5 justify-between overflow-y-auto"
      >
        <div
          data-testid="STORE.CONTAINER.BODY:VIEW"
          className="flex flex-col p-2.5 self-center items-start max-w-[1000px] gap-2.5 text-black bg-gray-100 rounded-xl ">

          <h1 className="text-[20px] font-bold" >Categories</h1>
          <div
            data-testid="STORE.CONTAINER.BODY.ANIMAL_DATA:LIST"
            className="flex flex-row flex-wrap justify-center gap-2.5 p-4">
            <button
              data-testid={"STORE.CONTAINER.BODY.ANIMAL_DATA:ITEM"}
              className="flex flex-col items-center cursor-pointer"
              onPointerUp={() => chooseCategory("ALL")}
            >
              <div className="px-6 font-bold">
                <h3>ALL</h3>
              </div>
              <div className="flex gap-3 p-5 bg-gray-500 rounded-xl items-center">
                <img className="h-32 w-32 rounded-full object-cover hover:scale-125" src={"/all_categories.png"} />
              </div>
            </button>
            {animalsData.map((
              data, index
            ) => {
              return (
                <button
                  key={index}
                  data-testid={`STORE.CONTAINER.BODY.ANIMAL_DATA:ITEM-${index}`}
                  className="flex flex-col items-center cursor-pointer"
                  onPointerUp={() => chooseCategory(data.group)}
                >
                  <div className="px-6  font-bold">
                    <h3>{data.group}</h3>
                  </div>
                  <div className="flex gap-3 p-5 bg-gray-500 rounded-xl items-center">
                    <img className="h-32 w-32 rounded-full object-cover hover:scale-125" src={data.animals.at(0)?.imageUrl} />
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      data-testid="STORE.CONTAINER:VIEW"
      className="flex flex-1 flex-col justify-between overflow-y-auto"
    >
      <div
        data-testid="STORE.CONTAINER.BODY:VIEW"
        className="flex flex-col p-2.5 self-center items-start max-w-[1000px] gap-2.5">
        <button
          className="cursor-pointer"
          onPointerUp={() => setGroup("")}>
          <ArrowLeft color={"white"} />
        </button>
        <div
          data-testid="STORE.CONTAINER.BODY.ANIMAL_DATA:LIST"
          className="flex flex-col gap-2.5">
          {animalsData.map((
            data, index
          ) => {
            if (group !== "ALL" && data.group !== group) return null;

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
                  {data.animals.map((animal) => {
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
                              onPress={() => handleAddToCart(animal.id)} />
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
