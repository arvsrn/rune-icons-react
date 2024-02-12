import * as React from "react";
import type { SVGProps } from "react";
const Exchange = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.5 2.5V10.5C3.5 11.167 3.9 12.5 5.5 12.5C7.1 12.5 7.5 11.167 7.5 10.5V4.5C7.5 3.833 7.9 2.5 9.5 2.5C11.1 2.5 11.5 3.833 11.5 4.5V12.5M3.5 2.5L1 5M3.5 2.5L6 5M11.5 12.5L9 10M11.5 12.5L14 10"
      stroke="currentColor"
    />
  </svg>
);
export { Exchange };
