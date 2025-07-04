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
      fill="#03B70F"
      d="M12 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Zm-1.5 14.692-3.75-3.75 1.192-1.192 2.558 2.557 5.558-5.557 1.197 1.19-6.755 6.752Z"
    />
  </svg>
);
const Memo = memo(SvgComponent);
export { Memo as CheckmarkFilled };
