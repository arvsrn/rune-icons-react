import * as React from "react";
import type { SVGProps } from "react";
const ArrowLeftAlign = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13 7.5H4.5M4.5 7.5L8 11M4.5 7.5L8 4M2.5 2V13" stroke="currentColor" />
  </svg>
);
export { ArrowLeftAlign };
