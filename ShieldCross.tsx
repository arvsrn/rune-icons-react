import * as React from "react";
import type { SVGProps } from "react";
const ShieldCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.257 5.362L7.5 7.12M7.5 7.12L5.743 8.877M7.5 7.12L5.743 5.362M7.5 7.12L9.257 8.877M7.5 2.5L2.5 4.5V6.5C2.5 7.5 4 11.5 7.5 12.5C11 11.5 12.5 7.5 12.5 6.5V4.5L7.5 2.5Z"
      stroke="currentColor"
    />
  </svg>
);
export { ShieldCross };
