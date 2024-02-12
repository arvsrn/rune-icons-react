import * as React from "react";
import type { SVGProps } from "react";
const CaretsVertcal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5 6L7.5 3.5L10 6M10 9L7.5 11.5L5 9" stroke="currentColor" />
  </svg>
);
export { CaretsVertcal };
