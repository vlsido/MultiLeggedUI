import { memo, type SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="-mr-1 size-5 text-black"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    data-slot="icon"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(SvgComponent);
export { Memo as ChevronIcon };
