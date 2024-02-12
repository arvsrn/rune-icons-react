import * as React from "react";
import type { SVGProps } from "react";
const BatteryCharging = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.5 5.5V9.5M7 5L5 7.5H8L6 10M11.5 9.5V5.5C11.5 4.96957 11.2893 4.46086 10.9142 4.08579C10.5391 3.71071 10.0304 3.5 9.5 3.5H3.5C2.96957 3.5 2.46086 3.71071 2.08579 4.08579C1.71071 4.46086 1.5 4.96957 1.5 5.5V9.5C1.5 10.0304 1.71071 10.5391 2.08579 10.9142C2.46086 11.2893 2.96957 11.5 3.5 11.5H9.5C10.0304 11.5 10.5391 11.2893 10.9142 10.9142C11.2893 10.5391 11.5 10.0304 11.5 9.5Z"
      stroke="currentColor"
    />
  </svg>
);
export { BatteryCharging };
