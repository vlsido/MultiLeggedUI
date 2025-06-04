import { animalsData } from "~/data/data";
import TextButton from "../buttons/TextButton";
import { useCallback, useRef, type ChangeEvent } from "react";

interface FiltersModalProps {
  isVisible: boolean;
  onApply: (filtersArr: string[]) => void;
}

function FiltersModal(props: FiltersModalProps) {

  const filtersArr = useRef<string[]>([]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {

    switch (e.target.checked) {
      case true:
        if (filtersArr.current.some((filter) => filter === e.target.id)) {
          return;
        } else {
          filtersArr.current.push(e.target.id);
        }
        break;
      case false:
        const filterIndex = filtersArr.current.findIndex((filter) => filter === e.target.id);
        if (filterIndex === -1) return;

        filtersArr.current.splice(filterIndex, 1);
        break;

    }

  }, []);

  const handleApply = useCallback(() => {
    props.onApply(filtersArr.current);
  }, []);

  if (props.isVisible === false) {
    return null;
  }

  return (
    <div
      data-testid="FILTERS_MODAL.CONTAINER:VIEW"
      className="absolute flex flex-col min-w-64 bg-white p-5 gap-5 text-black rounded-xl">
      <div
        id="categories"
      >
        <div className="flex flex-col gap-2.5">
          <div className="py-1.25 border-b-1">
            <h3 className="font-light text-[14px]">Groups</h3>
          </div>
          <div
            id="options"
            className="text-[16px]"
          >
            {animalsData.map((data) => {
              return (
                <div
                  key={data.group}
                  className="flex gap-2.5 items-center"
                >
                  <input
                    id={data.group}
                    type="checkbox"
                    onChange={onChange}
                  />
                  <p>{data.group}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="py-1.25 border-b-1">
            <h3 className="font-light text-[14px]">Store Presence</h3>
          </div>
          <div
            id="options"
            className="text-[16px]"
          >
            <div className="flex gap-2.5 items-center">
              <input
                id="IN STOCK"
                type="checkbox"
                onChange={onChange}
              />
              <p>In stock</p>
            </div>
            <div className="flex gap-2.5 items-center">
              <input
                id="OUT OF STOCK"
                type="checkbox"
                onChange={onChange}
              />
              <p>Out of Stock</p>
            </div>
          </div>
        </div>
      </div>
      <TextButton
        testId="FILTERS_MODAL.CONTAINER.OK:BUTTON"
        ariaLabel="Apply filters"
        text="OK"
        containerClassName="h-[48px] bg-black-500 rounded-full cursor-pointer"
        textClassName="text-white text-[16px]"
        onPress={handleApply}
      />
    </div>
  );
}

export default FiltersModal;
