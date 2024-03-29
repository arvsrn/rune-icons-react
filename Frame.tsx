import * as React from "react";
import type { SVGProps } from "react";
const Frame = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4.5 1V14M10.5 1V14M14 4.5H1M14 10.5H1" stroke="currentColor" />
  </svg>
);
export { Frame };
