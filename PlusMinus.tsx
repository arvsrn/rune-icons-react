import * as React from "react";
import type { SVGProps } from "react";
const PlusMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11 6.5H4M7.5 10V3M4 11.5H11" stroke="currentColor" />
  </svg>
);
export { PlusMinus };
