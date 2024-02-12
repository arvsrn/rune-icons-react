import * as React from "react";
import type { SVGProps } from "react";
const Sparkles = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.5 2V3.5M11.5 3.5V5M11.5 3.5H10M11.5 3.5H13M3.5 10V11.5M3.5 11.5V13M3.5 11.5H2M3.5 11.5H5M3 7.5C4.51 7.5 7.5 6.625 7.5 3C7.5 4.51 8.375 7.5 12 7.5C10.49 7.5 7.5 8.375 7.5 12C7.5 10.49 6.625 7.5 3 7.5Z"
      stroke="currentColor"
    />
  </svg>
);
export { Sparkles };
