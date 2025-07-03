import { useAnimate } from "motion/react-mini";
import { useState } from "react";
import { ChevronIcon } from "~/components/Icons/ChevronIcon";

interface DescriptionProps {
  text: string;
}

function Description(props: DescriptionProps) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const [open, setOpen] = useState<boolean>(false);

  function handleAnimate() {
    setOpen((prev) => !prev);

    if (!open) {
      const fullHeight = scope.current.scrollHeight;
      animate(
        scope.current,
        {
          height: fullHeight,
        },
        { duration: 0.3 },
      );
    } else {
      animate(
        scope.current,
        {
          height: 0,
          borderTopWidth: 0,
          borderRightWidth: 0,
          borderLeftWidth: 0,
        },
        { duration: 0.3 },
      );
    }
  }

  return (
    <div>
      <button
        className="flex items-center cursor-pointer text-blue-400"
        onPointerUp={handleAnimate}
      >
        <p className="text-nowrap">More info</p>
        <div
          className={`flex items-center justify-center transition-transform duration-300 ${
            open && "rotate-180"
          }`}
        >
          <ChevronIcon />
        </div>
      </button>
      <div
        ref={scope}
        className="h-[1px] overflow-hidden border-b-1 bg-white rounded-b-4xl rounded-t-md"
      >
        <div className="p-4">
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Description;
