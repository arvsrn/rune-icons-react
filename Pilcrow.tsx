import * as React from "react";
import type { SVGProps } from "react";
const Pilcrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 3.5H5.5C4.833 3.5 3.5 3.9 3.5 5.5C3.5 7.1 4.833 7.5 5.5 7.5H7.5V3.5Z"
      fill="currentColor"
    />
    <path
      d="M7.5 12V7.5M7.5 7.5H5.5C4.833 7.5 3.5 7.1 3.5 5.5C3.5 3.9 4.833 3.5 5.5 3.5H7.5M7.5 7.5V3.5M7.5 3.5H9.5M9.5 3.5V12M9.5 3.5H12"
      stroke="currentColor"
    />
  </svg>
);
export { Pilcrow };
