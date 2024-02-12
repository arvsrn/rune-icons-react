import * as React from "react";
import type { SVGProps } from "react";
const Previous = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.5 11.5L10.223 11.916L11 11.5H10.5ZM10.5 3.5H11L10.223 3.084L10.5 3.5ZM11 11.5V3.5H10V11.5H11ZM10.223 3.084L4.223 7.084L4.777 7.916L10.777 3.916L10.223 3.084ZM4.223 7.916L10.223 11.916L10.777 11.084L4.777 7.084L4.223 7.916ZM5 12V7.5H4V12H5ZM5 7.5V3H4V7.5H5Z"
      fill="currentColor"
    />
  </svg>
);
export { Previous };
