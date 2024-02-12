import * as React from "react";
import type { SVGProps } from "react";
const ParagraphIndent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 3.5H13M2 7.5H13M2 11.5H13M2 3.5H6.5M6.5 3.5L4 1M6.5 3.5L4 6"
      stroke="currentColor"
    />
  </svg>
);
export { ParagraphIndent };
