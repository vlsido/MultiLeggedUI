import { memo, type SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.016 1 6 6m-.015 5 .015-5m0 0 5 .015M6 6l-5-.015"
    />
  </svg>
)
const Memo = memo(SvgComponent)
export { Memo as CrossedLineIcon }
