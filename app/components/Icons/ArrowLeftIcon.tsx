import { type SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={37}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="M30 17v3H12l8.25 8.25-2.13 2.13L6.24 18.5 18.12 6.62l2.13 2.13L12 17h18Z"
    />
  </svg>
)
const Memo = memo(SvgComponent)
export { Memo as ArrowLeft }
