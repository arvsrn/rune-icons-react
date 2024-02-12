import * as React from "react";
import type { SVGProps } from "react";
const FileSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 1.5H4.5C3.96957 1.5 3.46086 1.71071 3.08579 2.08579C2.71071 2.46086 2.5 2.96957 2.5 3.5V11.5C2.5 12.0304 2.71071 12.5391 3.08579 12.9142C3.46086 13.2893 3.96957 13.5 4.5 13.5H6M7.5 1.5V6.5H10.5C11.605 6.5 12.325 5.6 11.669 4.711C10.539 3.181 8.539 1.5 7.5 1.5Z"
      stroke="currentColor"
    />
    <path
      d="M9.5 12.5C10.6046 12.5 11.5 11.6046 11.5 10.5C11.5 9.39543 10.6046 8.5 9.5 8.5C8.39543 8.5 7.5 9.39543 7.5 10.5C7.5 11.6046 8.39543 12.5 9.5 12.5Z"
      stroke="currentColor"
    />
    <path d="M11 12L13 14" stroke="currentColor" />
  </svg>
);
export { FileSearch };
