import * as React from "react";
import type { SVGProps } from "react";
const Camera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 9.5V5.5C1.5 4.96957 1.71071 4.46086 2.08579 4.08579C2.46086 3.71071 2.96957 3.5 3.5 3.5H11.5C12.0304 3.5 12.5391 3.71071 12.9142 4.08579C13.2893 4.46086 13.5 4.96957 13.5 5.5V9.5C13.5 10.0304 13.2893 10.5391 12.9142 10.9142C12.5391 11.2893 12.0304 11.5 11.5 11.5H3.5C2.96957 11.5 2.46086 11.2893 2.08579 10.9142C1.71071 10.5391 1.5 10.0304 1.5 9.5Z"
      stroke="currentColor"
    />
    <path
      d="M9.5 9.5C10.6046 9.5 11.5 8.60457 11.5 7.5C11.5 6.39543 10.6046 5.5 9.5 5.5C8.39543 5.5 7.5 6.39543 7.5 7.5C7.5 8.60457 8.39543 9.5 9.5 9.5Z"
      stroke="currentColor"
    />
    <path
      d="M4 5.5C4.13261 5.5 4.25979 5.55268 4.35355 5.64645C4.44732 5.74021 4.5 5.86739 4.5 6C4.5 6.13261 4.44732 6.25979 4.35355 6.35355C4.25979 6.44732 4.13261 6.5 4 6.5C3.86739 6.5 3.74021 6.44732 3.64645 6.35355C3.55268 6.25979 3.5 6.13261 3.5 6C3.5 5.86739 3.55268 5.74021 3.64645 5.64645C3.74021 5.55268 3.86739 5.5 4 5.5Z"
      stroke="currentColor"
    />
  </svg>
);
export { Camera };