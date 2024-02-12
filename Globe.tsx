import * as React from "react";
import type { SVGProps } from "react";
const Globe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 1.5C5.5 1.5 1.5 2.7 1.5 7.5M7.5 1.5C9.5 1.5 13.5 2.7 13.5 7.5M7.5 1.5C6.833 2.167 5.5 4 5.5 7.5C5.5 11 6.833 12.833 7.5 13.5M7.5 1.5C8.167 1.833 9.5 4 9.5 7.5C9.5 11 8.167 13.167 7.5 13.5M1.5 7.5C1.5 12.3 5.5 13.5 7.5 13.5M1.5 7.5H13.5M13.5 7.5C13.5 12.3 9.5 13.5 7.5 13.5"
      stroke="currentColor"
    />
  </svg>
);
export { Globe };
