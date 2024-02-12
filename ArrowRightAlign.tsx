import * as React from "react";
import type { SVGProps } from "react";
const ArrowRightAlign = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M2 7.5H10.5M10.5 7.5L7 4M10.5 7.5L7 11M12.5 2V13" stroke="currentColor" />
  </svg>
);
export { ArrowRightAlign };
