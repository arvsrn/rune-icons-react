import * as React from "react";
import type { SVGProps } from "react";
const AlignBaseline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 11.5H2M8.5 10V6.5M8.5 6.5V5.5C8.5 4.96957 8.71071 4.46086 9.08579 4.08579C9.46086 3.71071 9.96957 3.5 10.5 3.5C11.0304 3.5 11.5391 3.71071 11.9142 4.08579C12.2893 4.46086 12.5 4.96957 12.5 5.5V6.5M8.5 6.5H12.5M12.5 10V6.5M4.5 3V9.5M4.5 9.5L2 7M4.5 9.5L7 7"
      stroke="currentColor"
    />
  </svg>
);
export { AlignBaseline };
