import * as React from "react";
import type { SVGProps } from "react";
const CaretTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5 9L7.5 6.5L10 9" stroke="currentColor" />
  </svg>
);
export { CaretTop };
