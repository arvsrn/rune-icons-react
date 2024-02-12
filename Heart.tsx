import * as React from "react";
import type { SVGProps } from "react";
const Heart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 5.5C1.5 10.7 5.5 12.5 7.5 12.5C9.5 12.5 13.5 10.7 13.5 5.5C13.5 4 12.5 2.5 10.5 2.5C9 2.5 8 4 7.5 5C7 4 6 2.5 4.5 2.5C2.5 2.5 1.5 4 1.5 5.5Z"
      stroke="currentColor"
    />
  </svg>
);
export { Heart };
