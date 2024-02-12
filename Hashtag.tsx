import * as React from "react";
import type { SVGProps } from "react";
const Hashtag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6 1L4 14M11 1L9 14M2 4.5H13M2 10.5H13" stroke="currentColor" />
  </svg>
);
export { Hashtag };
