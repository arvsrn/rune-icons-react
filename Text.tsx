import * as React from "react";
import type { SVGProps } from "react";
const Text = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 11.5V3.5M7.5 11.5H5.5M7.5 11.5H9.5M7.5 3.5H3.5V6.5M7.5 3.5H11.5V6.5"
      stroke="currentColor"
    />
  </svg>
);
export { Text };
