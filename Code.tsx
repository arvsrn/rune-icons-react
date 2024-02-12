import * as React from "react";
import type { SVGProps } from "react";
const Code = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4 5L1.5 7.5L4 10M11 5L13.5 7.5L11 10M10 2L5 13" stroke="currentColor" />
  </svg>
);
export { Code };
