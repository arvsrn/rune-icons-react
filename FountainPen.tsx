import * as React from "react";
import type { SVGProps } from "react";
const FountainPen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 13.5V6.5L7.5 3.5M1.5 13.5H8.5L11.5 7.5M1.5 13.5L5.5 9.5M7.5 3.5L11.5 7.5M7.5 3.5L6.5 2.5L8 1M11.5 7.5L12.5 8.5L14 7M5.5 9.5V8.5H6.5M5.5 9.5L6.5 8.5M5.5 9.5H6.5V8.5"
      stroke="currentColor"
    />
  </svg>
);
export { FountainPen };
