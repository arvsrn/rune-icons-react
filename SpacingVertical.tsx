import * as React from "react";
import type { SVGProps } from "react";
const SpacingVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 7.5H14M7.5 9V14.5M7.5 14.5L5 12M7.5 14.5L10 12M7.5 6V0.5M7.5 0.5L10 3M7.5 0.5L5 3"
      stroke="currentColor"
      strokeLinejoin="bevel"
    />
  </svg>
);
export { SpacingVertical };
