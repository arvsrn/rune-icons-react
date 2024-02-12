import * as React from "react";
import type { SVGProps } from "react";
const Stopwatch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 9V5.5M10.5 4.5L12 3M12.5 8.5C12.5 9.82608 11.9732 11.0979 11.0355 12.0355C10.0979 12.9732 8.82608 13.5 7.5 13.5C6.17392 13.5 4.90215 12.9732 3.96447 12.0355C3.02678 11.0979 2.5 9.82608 2.5 8.5C2.5 7.17392 3.02678 5.90215 3.96447 4.96447C4.90215 4.02678 6.17392 3.5 7.5 3.5C8.82608 3.5 10.0979 4.02678 11.0355 4.96447C11.9732 5.90215 12.5 7.17392 12.5 8.5Z"
      stroke="currentColor"
    />
    <path d="M7.5 3.5V1.5H6H9" stroke="currentColor" />
  </svg>
);
export { Stopwatch };
