import * as React from "react";
import type { SVGProps } from "react";
const ArrowPathSquirqle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.5 8.5V5.5C3.5 4.96957 3.71071 4.46086 4.08579 4.08579C4.46086 3.71071 4.96957 3.5 5.5 3.5H10C10.3978 3.5 10.7794 3.65804 11.0607 3.93934C11.342 4.22064 11.5 4.60218 11.5 5M3.5 8.5L1 6M3.5 8.5L6 6M11.5 6.5V9.5C11.5 10.0304 11.2893 10.5391 10.9142 10.9142C10.5391 11.2893 10.0304 11.5 9.5 11.5H5C4.60218 11.5 4.22064 11.342 3.93934 11.0607C3.65804 10.7794 3.5 10.3978 3.5 10M11.5 6.5L14 9M11.5 6.5L9 9"
      stroke="currentColor"
    />
  </svg>
);
export { ArrowPathSquirqle };
