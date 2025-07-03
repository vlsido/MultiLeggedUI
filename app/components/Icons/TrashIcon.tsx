import { type SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 5v14c0 .5-.5 1-1 1H7c-.5 0-1-.5-1-1V5M4 5h16M10 4h4m-4 5v7m4-7v7"
    />
  </svg>
);
const Memo = memo(SvgComponent);
export { Memo as TrashIcon };
