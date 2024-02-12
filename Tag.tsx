import * as React from "react";
import type { SVGProps } from "react";
const Tag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.672 2.5H4.5C3.96957 2.5 3.46086 2.71071 3.08579 3.08579C2.71071 3.46086 2.5 3.96957 2.5 4.5V6.672C2.50011 7.20239 2.7109 7.71101 3.086 8.086L7.086 12.086C7.46106 12.4609 7.96967 12.6716 8.5 12.6716C9.03033 12.6716 9.53894 12.4609 9.914 12.086L12.086 9.914C12.4609 9.53894 12.6716 9.03033 12.6716 8.5C12.6716 7.96967 12.4609 7.46106 12.086 7.086L8.086 3.086C7.71101 2.7109 7.20239 2.50011 6.672 2.5Z"
      stroke="currentColor"
    />
    <path d="M4.5 5.5V4.5H5.5V5.5H4.5Z" stroke="currentColor" />
  </svg>
);
export { Tag };
