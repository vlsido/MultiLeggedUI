import TextButton from "../buttons/TextButton";

interface FiltersModalProps {
  isVisible: boolean;
}

function FiltersModal(props: FiltersModalProps) {

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
            <h3 className="font-light text-[14px]">Insect types</h3>
          </div>
          <div
            id="options"
            className="text-[16px]"
          >
            <div className="flex gap-2.5 items-center">
              <input type="checkbox" />
              <p>Isopods</p>
            </div>
            <div className="flex gap-2.5 items-center">
              <input type="checkbox" />
              <p>Stick insects</p>
            </div>
            <div className="flex gap-2.5 items-center">
              <input type="checkbox" />
              <p>Leaf insects</p>
            </div>
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
              <input type="checkbox" />
              <p>In stock</p>
            </div>
            <div className="flex gap-2.5 items-center">
              <input type="checkbox" />
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
        onPress={() => { }}
      />
    </div>
  );
}

export default FiltersModal;
