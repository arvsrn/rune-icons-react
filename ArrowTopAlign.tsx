import * as React from "react";
import type { SVGProps } from "react";
const ArrowTopAlign = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7.5 13V4.5M7.5 4.5L4 8M7.5 4.5L11 8M13 2.5H2" stroke="currentColor" />
  </svg>
);
export { ArrowTopAlign };
