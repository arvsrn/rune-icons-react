import * as React from "react";
import type { SVGProps } from "react";
const FloppyDisk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M3.5 1.5V4.5H5.5V1.5H3.5Z" fill="currentColor" />
    <path
      d="M3.5 1.5H2.5C2.23478 1.5 1.98043 1.60536 1.79289 1.79289C1.60536 1.98043 1.5 2.23478 1.5 2.5V12.5C1.5 12.7652 1.60536 13.0196 1.79289 13.2071C1.98043 13.3946 2.23478 13.5 2.5 13.5H12.5C12.7652 13.5 13.0196 13.3946 13.2071 13.2071C13.3946 13.0196 13.5 12.7652 13.5 12.5V4.5L10.5 1.5H8.5M3.5 1.5V4.5H5.5M3.5 1.5H5.5M8.5 1.5V4.5H5.5M8.5 1.5H5.5M5.5 4.5V1.5M3.5 13.5V10.5H11.5V13.5"
      stroke="currentColor"
    />
  </svg>
);
export { FloppyDisk };
