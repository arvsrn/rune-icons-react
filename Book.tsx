import * as React from "react";
import type { SVGProps } from "react";
const Book = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 11.5V3.5C1.5 1.9 2.833 1.5 3.5 1.5H13.4C13.4265 1.5 13.452 1.51054 13.4707 1.52929C13.4895 1.54804 13.5 1.57348 13.5 1.6V9.5M1.5 11.5C1.5 10.833 1.9 9.5 3.5 9.5H7.5H11.5H13.5M1.5 11.5C1.5 13.1 2.833 13.5 3.5 13.5H13.4C13.4265 13.5 13.452 13.4895 13.4707 13.4707C13.4895 13.452 13.5 13.4265 13.5 13.4V9.5"
      stroke="currentColor"
    />
  </svg>
);
export { Book };
