import * as React from "react";
import type { SVGProps } from "react";
const Underline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 3V6.5C4.667 7.5 5.5 9.5 7.5 9.5C9.5 9.5 10.333 7.5 10.5 6.5V3M3 11.5H12"
      stroke="currentColor"
    />
  </svg>
);
export { Underline };
