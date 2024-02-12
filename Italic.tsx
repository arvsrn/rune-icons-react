import * as React from "react";
import type { SVGProps } from "react";
const Italic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 3.5H8.5M8.5 3.5H11M8.5 3.5L6.5 11.5M6.5 11.5H4M6.5 11.5H9"
      stroke="currentColor"
    />
  </svg>
);
export { Italic };
