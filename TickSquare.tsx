import * as React from "react";
import type { SVGProps } from "react";
const TickSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M3 7L6.5 11L12 3" stroke="currentColor" />
  </svg>
);
export { TickSquare };
