import * as React from "react";
import type { SVGProps } from "react";
const Edit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 2.5H4.5C3.96957 2.5 3.46086 2.71071 3.08579 3.08579C2.71071 3.46086 2.5 3.96957 2.5 4.5V10.5C2.5 11.0304 2.71071 11.5391 3.08579 11.9142C3.46086 12.2893 3.96957 12.5 4.5 12.5H10.5C11.0304 12.5 11.5391 12.2893 11.9142 11.9142C12.2893 11.5391 12.5 11.0304 12.5 10.5V7M6 9L12 3"
      stroke="currentColor"
    />
  </svg>
);
export { Edit };
