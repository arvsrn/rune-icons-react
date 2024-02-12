import * as React from "react";
import type { SVGProps } from "react";
const ArrowUpTray = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.5 10V10.5C2.5 11.0304 2.71071 11.5391 3.08579 11.9142C3.46086 12.2893 3.96957 12.5 4.5 12.5H10.5C11.0304 12.5 11.5391 12.2893 11.9142 11.9142C12.2893 11.5391 12.5 11.0304 12.5 10.5V10M7.5 2.5L10.5 5.5M7.5 2.5L4.5 5.5M7.5 2.5V11"
      stroke="currentColor"
    />
  </svg>
);
export { ArrowUpTray };
