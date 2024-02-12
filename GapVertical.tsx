import * as React from "react";
import type { SVGProps } from "react";
const GapVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 1V2.5C12.5 3.03043 12.2893 3.53914 11.9142 3.91421C11.5391 4.28929 11.0304 4.5 10.5 4.5H4.5C3.96957 4.5 3.46086 4.28929 3.08579 3.91421C2.71071 3.53914 2.5 3.03043 2.5 2.5V1M2.5 14V12.5C2.5 11.9696 2.71071 11.4609 3.08579 11.0858C3.46086 10.7107 3.96957 10.5 4.5 10.5H10.5C11.0304 10.5 11.5391 10.7107 11.9142 11.0858C12.2893 11.4609 12.5 11.9696 12.5 12.5V14M11 7.5H4"
      stroke="currentColor"
    />
  </svg>
);
export { GapVertical };
