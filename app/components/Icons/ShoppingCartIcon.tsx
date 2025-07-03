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
      d="M23.325 19.5a2.986 2.986 0 0 0 2.625-1.545l5.37-9.735A1.494 1.494 0 0 0 30.015 6h-22.2l-1.41-3H1.5v3h3l5.4 11.385-2.025 3.66C6.78 23.055 8.22 25.5 10.5 25.5h18v-3h-18l1.65-3h11.175ZM9.24 9h18.225l-4.14 7.5h-10.53L9.24 9Zm1.26 18a2.996 2.996 0 0 0-2.985 3c0 1.65 1.335 3 2.985 3s3-1.35 3-3-1.35-3-3-3Zm15 0a2.996 2.996 0 0 0-2.985 3c0 1.65 1.335 3 2.985 3s3-1.35 3-3-1.35-3-3-3Z"
    />
  </svg>
);
const Memo = memo(SvgComponent);
export { Memo as ShoppingCartIcon };
