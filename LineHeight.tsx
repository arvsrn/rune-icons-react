import * as React from "react";
import type { SVGProps } from "react";
const LineHeight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.5 11V7.5M5.5 7.5V6.5C5.5 5.96957 5.71071 5.46086 6.08579 5.08579C6.46086 4.71071 6.96957 4.5 7.5 4.5C8.03043 4.5 8.53914 4.71071 8.91421 5.08579C9.28929 5.46086 9.5 5.96957 9.5 6.5V7.5M5.5 7.5H9.5M9.5 11V7.5M13 2.5H2M13 12.5H2"
      stroke="currentColor"
    />
  </svg>
);
export { LineHeight };
