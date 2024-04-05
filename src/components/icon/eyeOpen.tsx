import * as React from "react"
import { SVGProps } from "react"
const EyeOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <g
      stroke="#201F25"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.5}
      strokeWidth={2}
    >
      <path d="M11 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M21 8c-2.667 4.667-6 7-10 7S3.667 12.667 1 8c2.667-4.667 6-7 10-7s7.333 2.333 10 7Z" />
    </g>
  </svg>
)
export default EyeOpen
