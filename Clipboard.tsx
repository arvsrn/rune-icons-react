import * as React from "react";
import type { SVGProps } from "react";
const Clipboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 2.5C3.96957 2.5 3.46086 2.71071 3.08579 3.08579C2.71071 3.46086 2.5 3.96957 2.5 4.5V11.5C2.5 12.0304 2.71071 12.5391 3.08579 12.9142C3.46086 13.2893 3.96957 13.5 4.5 13.5H10.5C11.0304 13.5 11.5391 13.2893 11.9142 12.9142C12.2893 12.5391 12.5 12.0304 12.5 11.5V4.5C12.5 3.96957 12.2893 3.46086 11.9142 3.08579C11.5391 2.71071 11.0304 2.5 10.5 2.5M4.5 2.5C4.5 2.23478 4.60536 1.98043 4.79289 1.79289C4.98043 1.60536 5.23478 1.5 5.5 1.5H9.5C9.76522 1.5 10.0196 1.60536 10.2071 1.79289C10.3946 1.98043 10.5 2.23478 10.5 2.5M4.5 2.5C4.5 2.76522 4.60536 3.01957 4.79289 3.20711C4.98043 3.39464 5.23478 3.5 5.5 3.5H9.5C9.76522 3.5 10.0196 3.39464 10.2071 3.20711C10.3946 3.01957 10.5 2.76522 10.5 2.5"
      stroke="currentColor"
    />
  </svg>
);
export { Clipboard };
