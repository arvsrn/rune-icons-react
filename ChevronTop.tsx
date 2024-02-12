import * as React from "react";
import type { SVGProps } from "react";
const ChevronTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4 9L7.5 5.5L11 9" stroke="currentColor" />
  </svg>
);
export { ChevronTop };
