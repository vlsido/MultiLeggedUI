import { useCallback, type ChangeEvent } from "react";
import { CrossedLineIcon } from "~/components/Icons/CrossedLineIcon";
import { LineIcon } from "~/components/Icons/LineIcon";

interface QuantitySelectorPillProps {
  value: number;
  onChange: (value: number) => void;
  minQuantity?: number;
  maxQuantity?: number;
}

function QuantitySelectorPill(props: QuantitySelectorPillProps) {

  function add() {
    const newValue = props.value + 1;

    if (props.maxQuantity && newValue > props.maxQuantity) return props.onChange(props.maxQuantity);

    props.onChange(newValue);
  }

  function sub() {
    const newValue = props.value - 1;

    if (props.minQuantity && newValue < props.minQuantity) return props.onChange(props.minQuantity);

    props.onChange(newValue);
  }

  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const number = Number(e.target.value);

      if (isNaN(number)) return;

      props.onChange(number);
    },
    []
  );

  const onBlur = useCallback(
    () => {
      if (props.maxQuantity && props.value > props.maxQuantity) return props.onChange(props.maxQuantity);
      if (props.minQuantity && props.value < props.minQuantity) return props.onChange(props.minQuantity);
    },
    [
      props.value
    ]
  );

  return (
    <div className="flex h-[36px] ring-1 rounded-full">
      <button
        className="flex w-[36px] h-[36px] ring-1 bg-black-500 rounded-s-full justify-center items-center cursor-pointer"
        onPointerUp={sub}
      >
        <LineIcon />
      </button>
      <input
        className="flex w-[48px] p-2.5 bg-white text-center text-[16px]"
        value={props.value}
        onChange={onInputChange}
        onBlur={onBlur}
      />
      <button
        className="flex w-[36px] h-[36px] ring-1 bg-black-500 rounded-e-full justify-center items-center cursor-pointer"
        onPointerDown={add}
      >
        <CrossedLineIcon />
      </button>
    </div>

  );

}

export default QuantitySelectorPill;
