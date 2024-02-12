import * as React from "react";
import type { SVGProps } from "react";
const LayoutDashboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 8.5V10.5C1.5 11.0304 1.71071 11.5391 2.08579 11.9142C2.46086 12.2893 2.96957 12.5 3.5 12.5H7.5M1.5 8.5V4.5C1.5 3.96957 1.71071 3.46086 2.08579 3.08579C2.46086 2.71071 2.96957 2.5 3.5 2.5H7.5M1.5 8.5H7.5M7.5 12.5H11.5C12.0304 12.5 12.5391 12.2893 12.9142 11.9142C13.2893 11.5391 13.5 11.0304 13.5 10.5V6.5M7.5 12.5V8.5M7.5 2.5H11.5C12.0304 2.5 12.5391 2.71071 12.9142 3.08579C13.2893 3.46086 13.5 3.96957 13.5 4.5V6.5M7.5 2.5V6.5M7.5 8.5V6.5M13.5 6.5H7.5"
      stroke="currentColor"
    />
  </svg>
);
export { LayoutDashboard };
