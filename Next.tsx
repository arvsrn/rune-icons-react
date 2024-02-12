import * as React from "react";
import type { SVGProps } from "react";
const Next = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 3.5L4.777 3.084L4 3.5H4.5ZM4.5 11.5H4L4.777 11.916L4.5 11.5ZM4 3.5V11.5H5V3.5H4ZM4.777 11.916L10.777 7.916L10.223 7.084L4.223 11.084L4.777 11.916ZM10.777 7.084L4.777 3.084L4.223 3.916L10.223 7.916L10.777 7.084ZM10 3V7.5H11V3H10ZM10 7.5V12H11V7.5H10Z"
      fill="currentColor"
    />
  </svg>
);
export { Next };
