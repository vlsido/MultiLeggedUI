import { type SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M9.5 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2.83 0a3.001 3.001 0 0 1 5.66 0h7.17a1 1 0 1 1 0 2h-7.17a3 3 0 0 1-5.66 0H5.5a1 1 0 0 1 0-2h1.17Zm8.83 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2.83 0a3 3 0 0 1 5.66 0h1.17a1 1 0 0 1 0 2h-1.17a3 3 0 0 1-5.66 0H5.5a1 1 0 1 1 0-2h7.17Zm-3.17 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2.83 0a3 3 0 0 1 5.66 0h7.17a1 1 0 0 1 0 2h-7.17a3 3 0 0 1-5.66 0H5.5a1 1 0 1 1 0-2h1.17Z"
    />
  </svg>
);
const Memo = memo(SvgComponent);
export { Memo as FiltersIcon };
