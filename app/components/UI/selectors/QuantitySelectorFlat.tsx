import { useCallback, useState } from "react";

interface QuantitySelectorProps {
  initialQuantity: number;
  onAdd: () => void;
  onRemove: () => void;
}

function QuantitySelector(props: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState<number>(props.initialQuantity);

  const handleAdd = useCallback(() => {
    setQuantity((prev) => prev + 1);
    props.onAdd();
  }, []);

  const handleRemove = useCallback(() => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : prev));
    props.onRemove();
  }, []);

  return (
    <div className="flex md:flex-1 items-center justify-center ">
      <button
        className="p-2.5 cursor-pointer border-1 bg-gray-400"
        onPointerUp={handleRemove}
      >
        -
      </button>
      <p className="p-2.5 border-1 bg-gray-400">{quantity}</p>
      <button
        className="p-2.5 cursor-pointer border-1 bg-gray-400"
        onPointerUp={handleAdd}
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
