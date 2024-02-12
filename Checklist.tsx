import * as React from "react";
import type { SVGProps } from "react";
const Checklist = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 3.5H13M7 8.5H13M7 5.5H11M7 10.5H11M2.5 3.5V6.5H5.5V3.5H2.5ZM2.5 8.5V11.5H5.5V8.5H2.5Z"
      stroke="currentColor"
    />
  </svg>
);
export { Checklist };
