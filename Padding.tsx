import * as React from "react";
import type { SVGProps } from "react";
const Padding = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 3.5H3.5V4M5 3.5H6M7 3.5H8M9 3.5H10M11 3.5H11.5V4M11.5 5V6M11.5 7V8M11.5 9V10.25M11.5 11V11.5H11M10 11.5H9M8 11.5H7M6 11.5H5M4 11.5H3.5V11M3.5 10V9M3.5 8V7M3.5 6V5M1.5 1.5V13.5H13.5V1.5H1.5Z"
      stroke="currentColor"
    />
  </svg>
);
export { Padding };
