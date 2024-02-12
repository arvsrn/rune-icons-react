import * as React from "react";
import type { SVGProps } from "react";
const Multiply = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11 4L4 11M11 11L4 4" stroke="currentColor" />
  </svg>
);
export { Multiply };
