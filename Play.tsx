import * as React from "react";
import type { SVGProps } from "react";
const Play = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 3.49998L4.777 3.08398L4 3.49998H4.5ZM4.5 11.5H4L4.777 11.916L4.5 11.5ZM10.5 7.49998L10.777 7.91598L11.401 7.49998L10.777 7.08398L10.5 7.49998ZM4 3.49998V11.5H5V3.49998H4ZM4.777 11.916L10.777 7.91598L10.223 7.08398L4.223 11.084L4.777 11.916ZM10.777 7.08398L4.777 3.08398L4.223 3.91598L10.223 7.91598L10.777 7.08398Z"
      fill="currentColor"
    />
  </svg>
);
export { Play };
