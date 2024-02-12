import * as React from "react";
import type { SVGProps } from "react";
const Stop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 3.5H5C4.17157 3.5 3.5 4.17157 3.5 5V10C3.5 10.8284 4.17157 11.5 5 11.5H10C10.8284 11.5 11.5 10.8284 11.5 10V5C11.5 4.17157 10.8284 3.5 10 3.5Z"
      stroke="currentColor"
    />
  </svg>
);
export { Stop };
