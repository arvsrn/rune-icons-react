import * as React from "react";
import type { SVGProps } from "react";
const Calendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.5 1V4M4.5 1V4M3.5 5.5H11.5M13.5 4.5V10.5C13.5 11.0304 13.2893 11.5391 12.9142 11.9142C12.5391 12.2893 12.0304 12.5 11.5 12.5H3.5C2.96957 12.5 2.46086 12.2893 2.08579 11.9142C1.71071 11.5391 1.5 11.0304 1.5 10.5V4.5C1.5 3.96957 1.71071 3.46086 2.08579 3.08579C2.46086 2.71071 2.96957 2.5 3.5 2.5H11.5C12.0304 2.5 12.5391 2.71071 12.9142 3.08579C13.2893 3.46086 13.5 3.96957 13.5 4.5Z"
      stroke="currentColor"
    />
  </svg>
);
export { Calendar };
