import * as React from "react";
import type { SVGProps } from "react";
const Layers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 7L7.5 9.5L13.5 7M1.5 10L7.5 12.54L13.5 10M2.5 4.5L7.5 2.5L12.5 4.5L7.5 6.5L2.5 4.5Z"
      stroke="currentColor"
    />
  </svg>
);
export { Layers };
