import * as React from "react";
import type { SVGProps } from "react";
const Shield = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.5 4.5L7.5 2.5L12.5 4.5V6.5C12.5 7.5 11 11.5 7.5 12.5C4 11.5 2.5 7.5 2.5 6.5V4.5Z"
      stroke="currentColor"
    />
  </svg>
);
export { Shield };
