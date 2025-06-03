import { useCallback, useState } from "react";

export default function useToggle(initialValue: boolean = false): [boolean, (nextValue?: boolean) => void] {
  const [
    isToggled,
    setIsToggled
  ] = useState<boolean>(initialValue);

  const toggle = useCallback(
    (nextValue?: boolean) => {
      setIsToggled((prev) => nextValue !== undefined ? nextValue : !prev);
    },
    []
  );

  return [
    isToggled,
    toggle
  ];
}
