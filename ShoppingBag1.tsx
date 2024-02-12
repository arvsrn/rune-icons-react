import * as React from "react";
import type { SVGProps } from "react";
const ShoppingBag1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 6.5H2.5L4.5 12.5H10.5L12.5 6.5H11M4 6.5L5 3M4 6.5H11M11 6.5L10 3"
      stroke="currentColor"
    />
  </svg>
);
export { ShoppingBag1 };
