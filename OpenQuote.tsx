import * as React from "react";
import type { SVGProps } from "react";
const OpenQuote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 11.5C5.60457 11.5 6.5 10.6046 6.5 9.5C6.5 8.39543 5.60457 7.5 4.5 7.5C3.39543 7.5 2.5 8.39543 2.5 9.5C2.5 10.6046 3.39543 11.5 4.5 11.5Z"
      stroke="currentColor"
    />
    <path
      d="M10.5 11.5C11.6046 11.5 12.5 10.6046 12.5 9.5C12.5 8.39543 11.6046 7.5 10.5 7.5C9.39543 7.5 8.5 8.39543 8.5 9.5C8.5 10.6046 9.39543 11.5 10.5 11.5Z"
      stroke="currentColor"
    />
    <path
      d="M2.5 9.5V7.5C2.5 6.167 3.1 3.5 5.5 3.5M8.5 9.5V7.5C8.5 6.167 9.1 3.5 11.5 3.5"
      stroke="currentColor"
    />
  </svg>
);
export { OpenQuote };
