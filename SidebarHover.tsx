import * as React from "react";
import type { SVGProps } from "react";
const SidebarHover = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6 7.5H2V11.5H6V7.5Z" fill="currentColor" />
    <path
      d="M6.5 2.5H11.5C12.0304 2.5 12.5391 2.71071 12.9142 3.08579C13.2893 3.46086 13.5 3.96957 13.5 4.5V10.5C13.5 11.0304 13.2893 11.5391 12.9142 11.9142C12.5391 12.2893 12.0304 12.5 11.5 12.5H6.5M6.5 2.5H3.5C2.96957 2.5 2.46086 2.71071 2.08579 3.08579C1.71071 3.46086 1.5 3.96957 1.5 4.5V10.5C1.5 11.0304 1.71071 11.5391 2.08579 11.9142C2.46086 12.2893 2.96957 12.5 3.5 12.5H6.5M6.5 2.5V12.5M2 5.5V3.5H6V5.5M2 5.5H6M2 5.5V7.5M6 5.5V7.5M2 7.5H6M2 7.5V11.5H6V7.5"
      stroke="currentColor"
    />
  </svg>
);
export { SidebarHover };
