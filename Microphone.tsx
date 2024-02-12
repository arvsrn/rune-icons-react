import * as React from "react";
import type { SVGProps } from "react";
const Microphone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.505 11.5V14M7.505 11.5C8.56454 11.5 9.58068 11.0791 10.3299 10.3299C11.0791 9.58068 11.5 8.56454 11.5 7.505V7M7.505 11.5C6.44281 11.5 5.42412 11.078 4.67304 10.327C3.92195 9.57588 3.5 8.55719 3.5 7.495V7M7.505 1.5C6.839 1.5 5.505 1.9 5.505 3.5V7.5C5.505 8.167 5.905 9.5 7.505 9.5C9.105 9.5 9.505 8.167 9.505 7.5V3.5C9.505 2.833 9.105 1.5 7.505 1.5Z"
      stroke="currentColor"
    />
  </svg>
);
export { Microphone };
