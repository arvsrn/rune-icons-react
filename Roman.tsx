import * as React from "react";
import type { SVGProps } from "react";
const Roman = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 3.5H7.5M7.5 3.5H10M7.5 3.5V11.5M7.5 11.5H5M7.5 11.5H10"
      stroke="currentColor"
    />
  </svg>
);
export { Roman };
