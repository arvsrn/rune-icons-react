import * as React from "react";
import type { SVGProps } from "react";
const Garage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 14V5.5L7.5 1.5L13.5 5.5V14M3.5 13.5V9.5C3.5 8.96957 3.71071 8.46086 4.08579 8.08579C4.46086 7.71071 4.96957 7.5 5.5 7.5H9.5C10.0304 7.5 10.5391 7.71071 10.9142 8.08579C11.2893 8.46086 11.5 8.96957 11.5 9.5V13.5H3.5Z"
      stroke="currentColor"
    />
  </svg>
);
export { Garage };
