import * as React from "react";
import type { SVGProps } from "react";
const GapHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 2.5H2.5C3.03043 2.5 3.53914 2.71071 3.91421 3.08579C4.28929 3.46086 4.5 3.96957 4.5 4.5V10.5C4.5 11.0304 4.28929 11.5391 3.91421 11.9142C3.53914 12.2893 3.03043 12.5 2.5 12.5H1M14 12.5H12.5C11.9696 12.5 11.4609 12.2893 11.0858 11.9142C10.7107 11.5391 10.5 11.0304 10.5 10.5V4.5C10.5 3.96957 10.7107 3.46086 11.0858 3.08579C11.4609 2.71071 11.9696 2.5 12.5 2.5H14M7.5 4V11"
      stroke="currentColor"
    />
  </svg>
);
export { GapHorizontal };
