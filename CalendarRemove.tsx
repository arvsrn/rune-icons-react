import * as React from "react";
import type { SVGProps } from "react";
const CalendarRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.5 1V4M4.5 1V4M3.5 5.5H11.5M9 10.5H14M13.5 8V4.5C13.5 3.96957 13.2893 3.46086 12.9142 3.08579C12.5391 2.71071 12.0304 2.5 11.5 2.5H3.5C2.96957 2.5 2.46086 2.71071 2.08579 3.08579C1.71071 3.46086 1.5 3.96957 1.5 4.5V10.5C1.5 11.0304 1.71071 11.5391 2.08579 11.9142C2.46086 12.2893 2.96957 12.5 3.5 12.5H8"
      stroke="currentColor"
    />
  </svg>
);
export { CalendarRemove };
