import * as React from "react";
import type { SVGProps } from "react";
const AscendingSort = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.5 3.5L10.5 1.5M10.5 1.5L12.5 3.5M10.5 1.5V13.5M10.5 13.5L8.5 11.5M10.5 13.5L12.5 11.5M7 4.5H5M7 6.5H4M7 8.5H3M7 10.5H2"
      stroke="currentColor"
    />
  </svg>
);
export { AscendingSort };
