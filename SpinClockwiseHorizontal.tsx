import * as React from "react";
import type { SVGProps } from "react";
const SpinClockwiseHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.5 10.335C6.16144 10.4412 6.8301 10.496 7.5 10.499C9.5 10.499 13.5 9.899 13.5 7.499C13.5 5.099 9.5 4.5 7.5 4.5C5.5 4.5 1.5 5.1 1.5 7.5C1.5 8.185 2.064 9.34 3.965 10M5.5 10.335L7.835 8M5.5 10.335L7.835 12.67"
      stroke="currentColor"
    />
  </svg>
);
export { SpinClockwiseHorizontal };
