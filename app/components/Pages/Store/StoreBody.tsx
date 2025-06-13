import TextButton from "~/components/UI/buttons/TextButton";
import { useAppDispatch, useAppSelector } from "~/hooks/reduxHooks";
import Footer from "~/components/UI/Footer";
import {
  useCallback,
  useState
} from "react";
import { pushToCart } from "~/redux/slices/cartSlice";
import { ArrowLeft } from "~/components/Icons/ArrowLeftIcon";

function StoreBody() {
  const species = useAppSelector((state) => state.species.species);

  const dispatch = useAppDispatch();

  const [
    group,
    setGroup
  ] = useState<string>("");

  const handleAddToCart = useCallback(
    (
      speciesId: number,
      packId: number,
      name: string,
      imageUrl: string,
    ) => {
      dispatch(pushToCart({ speciesId, packId, name, imageUrl, quantity: 1 }));
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
                onPointerUp={() => chooseCategory("ALL")}
              >
                <div className="px-6 font-bold">
                  <h3>ALL</h3>
                </div>
                <div className="flex gap-3 p-5 bg-gray-500 rounded-xl items-center">
                  <img className="h-32 w-32 rounded-full object-cover hover:scale-125" src={"/all_categories.png"} />
                </div>
              </button>
              {species.map((
                data, index
              ) => {
                return (
                  <button
                    key={index}
                    className="flex flex-col items-center cursor-pointer"
                    onPointerUp={() => chooseCategory(data.name)}
                  >
                    <div className="px-6  font-bold">
                      <h3>{data.name.toUpperCase()}</h3>
                    </div>
                    <div className="flex gap-3 p-5 bg-gray-500 rounded-xl items-center">
                      <img className="h-32 w-32 rounded-full object-cover hover:scale-125" src={data.data.at(0)?.imageUrl} />
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

  return (
    <div
      className="flex flex-1 flex-col justify-between overflow-y-auto"
    >
      <div
        className="flex flex-col p-2.5 self-center items-start max-w-[1000px] gap-2.5">
        <button
          className="cursor-pointer"
          onPointerUp={() => setGroup("")}>
          <ArrowLeft color={"white"} />
        </button>
        <div
          className="flex flex-col gap-2.5">
          {species.map((
            data, index
          ) => {
            if (group !== "ALL" && data.name !== group) return null;

            return (
              <div
                key={index}
                className="bg-gray-100 rounded-xl">
                <div className="px-6 py-2 text-black font-bold">
                  {data.name.toUpperCase()}
                </div>
                <div
                  className="flex px-4 py-4 gap-4 flex-wrap justify-center">
                  {data.data.map((data) => {
                    return (
                      <div
                        key={data.id}
                        className="flex flex-col max-w-[400px] bg-gray-400 p-5 rounded-xl">
                        <div className="flex flex-col gap-3 p-5 bg-gray-500 rounded-xl items-center">
                          <p className="text-black text-center">{data.names[0]}</p>
                          <img src={data.imageUrl} />
                        </div>
                        <div
                          className="flex flex-col h-full justify-between text-black">
                          <div
                            className="flex flex-col py-2 gap-1 whitespace-pre-line">
                            <p>Names: {data.names.join(", ")} </p>
                            <p>{data.description}</p>
                          </div>
                          <div className="flex flex-col w-full my-2 gap-2 items-center text-[20px] ">
                            {data.speciesPacks[0].price / 100}$/{data.speciesPacks[0].units}pcs
                            <TextButton
                              ariaLabel={`Add ${data.names[0]} to cart`}
                              text="Add to cart"
                              containerClassName="px-10 py-4 w-full rounded-full bg-black-500 text-white cursor-pointer drop-shadow-md"
                              textClassName="text-[20px]"
                              onPress={() => handleAddToCart(
                                data.id,
                                data.speciesPacks[0].id,
                                data.names[0],
                                data.imageUrl
                              )} />
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
