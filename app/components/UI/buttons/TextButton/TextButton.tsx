import type { ReactElement } from "react";

interface TextButtonProps {
  text: string;
  onPress: () => void;
  ariaLabel: string;
  containerClassName?: string;
  textClassName?: string;
  leftSideIcon?: ReactElement;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
}

function TextButton(props: TextButtonProps) {
  return (
    <button
      className={
        props.containerClassName
          ? props.containerClassName
          : "flex flex-row items-center px-[16px] py-[10px] gap-[8px] bg-black rounded-[4px] cursor-pointer"
      }
      type={props.type}
      aria-label={props.ariaLabel}
      disabled={props.disabled}
      onPointerUp={props.onPress}
    >
      {props.leftSideIcon}
      <p className={props.textClassName ? props.textClassName : "text-[14px]"}>
        {props.text}
      </p>
    </button>
  );
}

export default TextButton;
