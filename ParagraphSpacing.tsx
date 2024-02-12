import * as React from "react";
import type { SVGProps } from "react";
const ParagraphSpacing = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13 1.5H2M13 11.5H2M13 13.5H2" stroke="currentColor" />
    <path
      d="M7.5 3V10M7.5 3L5 5.5M7.5 3L10 5.5M7.5 10L5 7.5M7.5 10L10 7.5"
      stroke="currentColor"
      strokeLinejoin="bevel"
    />
  </svg>
);
export { ParagraphSpacing };
