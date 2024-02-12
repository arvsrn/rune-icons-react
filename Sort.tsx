import * as React from "react";
import type { SVGProps } from "react";
const Sort = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.5 3.5L10.5 1.5M10.5 1.5L12.5 3.5M10.5 1.5V13.5M10.5 13.5L8.5 11.5M10.5 13.5L12.5 11.5M2.5 13.5V8.5H6.5M2.5 13.5H6.5V8.5M2.5 13.5L6.5 8.5M6.5 4.5H2.5V1.5H6.5V4.5ZM6.5 4.5V7"
      stroke="currentColor"
    />
  </svg>
);
export { Sort };
