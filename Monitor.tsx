import * as React from "react";
import type { SVGProps } from "react";
const Monitor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.5 10.5H3.5C2.96957 10.5 2.46086 10.2893 2.08579 9.91421C1.71071 9.53914 1.5 9.03043 1.5 8.5V4.5C1.5 3.96957 1.71071 3.46086 2.08579 3.08579C2.46086 2.71071 2.96957 2.5 3.5 2.5H11.5C12.0304 2.5 12.5391 2.71071 12.9142 3.08579C13.2893 3.46086 13.5 3.96957 13.5 4.5V8.5C13.5 9.03043 13.2893 9.53914 12.9142 9.91421C12.5391 10.2893 12.0304 10.5 11.5 10.5H9.5M5.5 10.5V12.5M5.5 10.5H9.5M9.5 10.5V12.5M5.5 12.5H9.5M5.5 12.5H12H9.5M5.5 12.5H3"
      stroke="currentColor"
    />
  </svg>
);
export { Monitor };
