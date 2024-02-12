import * as React from "react";
import type { SVGProps } from "react";
const Resume = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.5 3.49998L5.777 3.08398L5 3.49998H5.5ZM5.5 11.5H5L5.777 11.916L5.5 11.5ZM11.5 7.49998L11.777 7.91598L12.401 7.49998L11.777 7.08398L11.5 7.49998ZM5 3.49998V11.5H6V3.49998H5ZM5.777 11.916L11.777 7.91598L11.223 7.08398L5.223 11.084L5.777 11.916ZM11.777 7.08398L5.777 3.08398L5.223 3.91598L11.223 7.91598L11.777 7.08398Z"
      fill="currentColor"
    />
    <path d="M3.5 3V12" stroke="currentColor" />
  </svg>
);
export { Resume };
