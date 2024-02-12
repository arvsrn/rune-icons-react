import * as React from "react";
import type { SVGProps } from "react";
const LockUnlocked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 6.5H3.5C2.96957 6.5 2.46086 6.71071 2.08579 7.08579C1.71071 7.46086 1.5 7.96957 1.5 8.5V11.5C1.5 12.0304 1.71071 12.5391 2.08579 12.9142C2.46086 13.2893 2.96957 13.5 3.5 13.5H11.5C12.0304 13.5 12.5391 13.2893 12.9142 12.9142C13.2893 12.5391 13.5 12.0304 13.5 11.5V8.5C13.5 7.96957 13.2893 7.46086 12.9142 7.08579C12.5391 6.71071 12.0304 6.5 11.5 6.5H4.5ZM4.5 6.5V3.5C4.5 2.96957 4.71071 2.46086 5.08579 2.08579C5.46086 1.71071 5.96957 1.5 6.5 1.5H8.5C9.03043 1.5 9.53914 1.71071 9.91421 2.08579C10.2893 2.46086 10.5 2.96957 10.5 3.5V4"
      stroke="currentColor"
    />
  </svg>
);
export { LockUnlocked };
