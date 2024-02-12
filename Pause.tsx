import * as React from "react";
import type { SVGProps } from "react";
const Pause = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5.5 3V12M9.5 3V12" stroke="currentColor" />
  </svg>
);
export { Pause };