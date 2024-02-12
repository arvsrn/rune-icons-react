import * as React from "react";
import type { SVGProps } from "react";
const Bookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.5 12.5H3L3.854 12.854L3.5 12.5ZM3.5 2.5V2H3V2.5H3.5ZM11.5 2.5H12V2H11.5V2.5ZM11.5 12.5L11.146 12.854L12 12.5H11.5ZM7.5 8.5L7.854 8.146L7.5 7.793L7.146 8.146L7.5 8.5ZM4 12.5V2.5H3V12.5H4ZM3.5 3H11.5V2H3.5V3ZM11 2.5V12.5H12V2.5H11ZM11.854 12.146L7.854 8.146L7.146 8.854L11.146 12.854L11.854 12.146ZM7.146 8.146L3.146 12.146L3.854 12.854L7.854 8.854L7.146 8.146Z"
      fill="currentColor"
    />
  </svg>
);
export { Bookmark };
