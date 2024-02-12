import * as React from "react";
import type { SVGProps } from "react";
const Folder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 3.5L7 1.5H3.5C2.96957 1.5 2.46086 1.71071 2.08579 2.08579C1.71071 2.46086 1.5 2.96957 1.5 3.5V5.5M10 3.5H11.5C12.0304 3.5 12.5391 3.71071 12.9142 4.08579C13.2893 4.46086 13.5 4.96957 13.5 5.5V11.5C13.5 12.0304 13.2893 12.5391 12.9142 12.9142C12.5391 13.2893 12.0304 13.5 11.5 13.5H3.5C2.96957 13.5 2.46086 13.2893 2.08579 12.9142C1.71071 12.5391 1.5 12.0304 1.5 11.5V5.5M10 3.5L7 5.5H1.5"
      stroke="currentColor"
    />
  </svg>
);
export { Folder };
