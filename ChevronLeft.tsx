import * as React from "react";
import type { SVGProps } from "react";
const ChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9 11L5.5 7.5L9 4" stroke="currentColor" />
  </svg>
);
export { ChevronLeft };
