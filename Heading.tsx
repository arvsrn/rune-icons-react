import * as React from "react";
import type { SVGProps } from "react";
const Heading = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 11.5V7.5M4.5 11.5H3M4.5 11.5H6M4.5 7.5V3.5M4.5 7.5H10.5M4.5 3.5H3M4.5 3.5H6M10.5 7.5V3.5M10.5 7.5V11.5M10.5 3.5H9M10.5 3.5H12M10.5 11.5H9M10.5 11.5H12"
      stroke="currentColor"
    />
  </svg>
);
export { Heading };
