import * as React from "react";
import type { SVGProps } from "react";
const Crop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1 4.5H10.5V14M14 10.5H4.5V1" stroke="currentColor" />
  </svg>
);
export { Crop };
