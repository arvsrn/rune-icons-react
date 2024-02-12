import * as React from "react";
import type { SVGProps } from "react";
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M2 7.5H12.5M12.5 7.5L9 4M12.5 7.5L9 11" stroke="currentColor" />
  </svg>
);
export { ArrowRight };
