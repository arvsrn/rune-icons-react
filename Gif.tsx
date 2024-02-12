import * as React from "react";
import type { SVGProps } from "react";
const Gif = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 4.5H1.5V10.5H4.5V7.5H3M14 4.5H11.5C11.2348 4.5 10.9804 4.60536 10.7929 4.79289C10.6054 4.98043 10.5 5.23478 10.5 5.5V7.5M10.5 7.5V11M10.5 7.5H14M6 4.5H7.5M7.5 4.5H9M7.5 4.5V10.5M7.5 10.5H6M7.5 10.5H9"
      stroke="currentColor"
    />
  </svg>
);
export { Gif };
