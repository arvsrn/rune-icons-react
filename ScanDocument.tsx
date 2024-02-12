import * as React from "react";
import type { SVGProps } from "react";
const ScanDocument = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 4.5H11M4 7.5H11M4 10.5H9M13.5 5V1.5H10M1.5 5V1.5H5M1.5 10V13.5H5M13.5 10V13.5H10"
      stroke="currentColor"
    />
  </svg>
);
export { ScanDocument };
