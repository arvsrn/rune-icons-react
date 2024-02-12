import * as React from "react";
import type { SVGProps } from "react";
const Angle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M3.5 3V11.5H12" stroke="currentColor" />
    <path
      d="M4 7.5C4.92826 7.5 5.8185 7.86875 6.47487 8.52513C7.13125 9.1815 7.5 10.0717 7.5 11"
      stroke="currentColor"
    />
  </svg>
);
export { Angle };
