import * as React from "react";
import type { SVGProps } from "react";
const Overline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 5V8.5C4.667 9.5 5.5 11.5 7.5 11.5C9.5 11.5 10.333 9.5 10.5 8.5V5M3 3.5H12"
      stroke="currentColor"
    />
  </svg>
);
export { Overline };
