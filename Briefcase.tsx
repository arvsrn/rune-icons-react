import * as React from "react";
import type { SVGProps } from "react";
const Briefcase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 4.5H3.5C2.96957 4.5 2.46086 4.71071 2.08579 5.08579C1.71071 5.46086 1.5 5.96957 1.5 6.5V7.5M4.5 4.5V3.5C4.5 2.96957 4.71071 2.46086 5.08579 2.08579C5.46086 1.71071 5.96957 1.5 6.5 1.5H8.5C9.03043 1.5 9.53914 1.71071 9.91421 2.08579C10.2893 2.46086 10.5 2.96957 10.5 3.5V4.5M4.5 4.5H10.5M1.5 7.5V11.5C1.5 12.0304 1.71071 12.5391 2.08579 12.9142C2.46086 13.2893 2.96957 13.5 3.5 13.5H11.5C12.0304 13.5 12.5391 13.2893 12.9142 12.9142C13.2893 12.5391 13.5 12.0304 13.5 11.5V7.5M1.5 7.5H13.5M10.5 4.5H11.5C12.0304 4.5 12.5391 4.71071 12.9142 5.08579C13.2893 5.46086 13.5 5.96957 13.5 6.5V7.5M4.5 6V9M10.5 6V9"
      stroke="currentColor"
    />
  </svg>
);
export { Briefcase };