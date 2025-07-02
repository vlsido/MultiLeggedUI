import { memo, type SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={2}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1 1h10"
    />
  </svg>
)
const Memo = memo(SvgComponent)
export { Memo as LineIcon }
