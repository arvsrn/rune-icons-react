import * as React from "react";
import type { SVGProps } from "react";
const HomeVerticalLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 12V8M13.5 5.5V11.5C13.5 12.0304 13.2893 12.5391 12.9142 12.9142C12.5391 13.2893 12.0304 13.5 11.5 13.5H3.5C2.96957 13.5 2.46086 13.2893 2.08579 12.9142C1.71071 12.5391 1.5 12.0304 1.5 11.5V5.5L7.5 1.5L13.5 5.5Z"
      stroke="currentColor"
    />
  </svg>
);
export { HomeVerticalLine };
