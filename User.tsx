import * as React from "react";
import type { SVGProps } from "react";
const User = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.49991 9.5C4.28991 9.5 2.68991 10.394 1.98291 11.584C1.41791 12.534 2.39491 13.5 3.49991 13.5H11.4999C12.6049 13.5 13.5819 12.534 13.0169 11.584C12.3099 10.394 10.7099 9.5 7.49991 9.5ZM4.49991 4.5C4.49991 6.9 6.49991 7.5 7.49991 7.5C8.49991 7.5 10.4999 6.9 10.4999 4.5C10.4999 2.1 8.49991 1.5 7.49991 1.5C6.49991 1.5 4.49991 2.1 4.49991 4.5Z"
      stroke="currentColor"
    />
  </svg>
);
export { User };
