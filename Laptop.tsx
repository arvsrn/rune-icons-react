import * as React from "react";
import type { SVGProps } from "react";
const Laptop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.5 11.5V10.5M2.5 10.5V5.5C2.5 4.96957 2.71071 4.46086 3.08579 4.08579C3.46086 3.71071 3.96957 3.5 4.5 3.5H10.5C11.0304 3.5 11.5391 3.71071 11.9142 4.08579C12.2893 4.46086 12.5 4.96957 12.5 5.5V10.5M2.5 10.5H12.5M12.5 11.5V10.5M1 11.5H14"
      stroke="currentColor"
    />
  </svg>
);
export { Laptop };
