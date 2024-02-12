import * as React from "react";
import type { SVGProps } from "react";
const SpacingHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 1V14M6 7.5H0.5M0.5 7.5L3 5M0.5 7.5L3 10M9 7.5H14.5M14.5 7.5L12 10M14.5 7.5L12 5"
      stroke="currentColor"
      strokeLinejoin="bevel"
    />
  </svg>
);
export { SpacingHorizontal };
