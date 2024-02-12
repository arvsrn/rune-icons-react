import * as React from "react";
import type { SVGProps } from "react";
const Trash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 6L5 12.5H10L11 6M3 4.5H5.5M5.5 4.5H9.5M5.5 4.5C5.5 3.96957 5.71071 3.46086 6.08579 3.08579C6.46086 2.71071 6.96957 2.5 7.5 2.5C8.03043 2.5 8.53914 2.71071 8.91421 3.08579C9.28929 3.46086 9.5 3.96957 9.5 4.5M9.5 4.5H12"
      stroke="currentColor"
    />
  </svg>
);
export { Trash };
