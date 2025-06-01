import { memo, type SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={36}
    fill="none"
    {...props}
  >
    <path
      fill="#212221"
      d="m30.5 12-12 7.5-12-7.5V9l12 7.5 12-7.5m0-3h-24a2.99 2.99 0 0 0-3 3v18a3 3 0 0 0 3 3h24a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"
    />
  </svg>
)
const Memo = memo(SvgComponent)
export { Memo as EmailIcon }
