import * as React from "react";
import type { SVGProps } from "react";
const ArrowTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7.5 13V2.5M7.5 2.5L4 6M7.5 2.5L11 6" stroke="currentColor" />
  </svg>
);
export { ArrowTop };
