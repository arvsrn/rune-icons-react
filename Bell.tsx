import * as React from "react";
import type { SVGProps } from "react";
const Bell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 10.5C4.5 10.833 5.1 13.5 7.5 13.5C9.9 13.5 10.5 10.833 10.5 10.5M2.5 10.5V6.5C2.667 4.833 3.9 1.5 7.5 1.5C11.1 1.5 12.333 4.833 12.5 6.5V10.5H2.5Z"
      stroke="currentColor"
    />
  </svg>
);
export { Bell };
