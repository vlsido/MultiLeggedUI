import { type SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M6 9V6h24v3H6Zm0 21v-9H4.5v-3L6 10.5h24l1.5 7.5v3H30v9h-3v-9h-6v9H6Zm3-3h9v-6H9v6Z"
    />
  </svg>
);
const Memo = memo(SvgComponent);
export { Memo as StoreIcon };
