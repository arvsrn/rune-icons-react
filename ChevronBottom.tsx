import * as React from "react";
import type { SVGProps } from "react";
const ChevronBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11 6L7.5 9.5L4 6" stroke="currentColor" />
  </svg>
);
export { ChevronBottom };
