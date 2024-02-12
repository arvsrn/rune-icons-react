import * as React from "react";
import type { SVGProps } from "react";
const Pin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 9.5H12.5C12.5 7.5 11.5 5.5 9.5 5.5V1.5H5.5V5.5C3.5 5.5 2.5 7.5 2.5 9.5H7.5ZM7.5 9.5V14"
      stroke="currentColor"
    />
  </svg>
);
export { Pin };
