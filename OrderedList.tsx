import * as React from "react";
import type { SVGProps } from "react";
const OrderedList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 2.5H3.5V6.5M3.5 6.5H2M3.5 6.5H5M2 8.5H4.5V10.5H2.5V12.5H5M7 3.5H13M7 8.5H13M7 5.5H11M7 10.5H11"
      stroke="currentColor"
    />
  </svg>
);
export { OrderedList };
