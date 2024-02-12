import * as React from "react";
import type { SVGProps } from "react";
const CaretsHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6 10L3.5 7.5L6 5M9 5L11.5 7.5L9 10" stroke="currentColor" />
  </svg>
);
export { CaretsHorizontal };
