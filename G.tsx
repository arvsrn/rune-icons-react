import * as React from "react";
import type { SVGProps } from "react";
const G = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 4.5H8.5V10.5H12.5V7.5H10M2 10.5H5.5C5.76522 10.5 6.01957 10.3946 6.20711 10.2071C6.39464 10.0196 6.5 9.76522 6.5 9.5V8.5C6.5 8.23478 6.39464 7.98043 6.20711 7.79289C6.01957 7.60536 5.76522 7.5 5.5 7.5H2.5V4.5H7"
      stroke="currentColor"
    />
  </svg>
);
export { G };
