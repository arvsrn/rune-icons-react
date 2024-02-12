import * as React from "react";
import type { SVGProps } from "react";
const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6 4L9.5 7.5L6 11" stroke="currentColor" />
  </svg>
);
export { ChevronRight };
