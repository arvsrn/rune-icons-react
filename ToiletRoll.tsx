import * as React from "react";
import type { SVGProps } from "react";
const ToiletRoll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.5 1.5C2.833 1.5 1.5 2.5 1.5 6.5C1.5 10.5 2.833 11.5 3.5 11.5C4.167 11.5 5.5 10.5 5.5 6.5M3.5 1.5C4.167 1.5 5.5 2.5 5.5 6.5M3.5 1.5H11.5C12.167 1.5 13.5 2.5 13.5 6.5V13.5H5.5V6.5M3.5 5.5V7.5"
      stroke="currentColor"
    />
  </svg>
);
export { ToiletRoll };
