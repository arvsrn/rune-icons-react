import * as React from "react";
import type { SVGProps } from "react";
const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13 7.5H2.5M2.5 7.5L6 11M2.5 7.5L6 4" stroke="currentColor" />
  </svg>
);
export { ArrowLeft };
