import * as React from "react";
import type { SVGProps } from "react";
const Jpg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 4.5H11.5V10.5H14.5V7.5H13M5.5 11V7.5M5.5 7.5V5.5C5.5 5.23478 5.60536 4.98043 5.79289 4.79289C5.98043 4.60536 6.23478 4.5 6.5 4.5H8.5C8.76522 4.5 9.01957 4.60536 9.20711 4.79289C9.39464 4.98043 9.5 5.23478 9.5 5.5V6.5C9.5 6.76522 9.39464 7.01957 9.20711 7.20711C9.01957 7.39464 8.76522 7.5 8.5 7.5H5.5ZM0 4.5H2.5M2.5 4.5V8.5C2.5 9.03043 2.28929 9.53914 1.91421 9.91421C1.53914 10.2893 1.03043 10.5 0.5 10.5H0M2.5 4.5H4"
      stroke="currentColor"
    />
  </svg>
);
export { Jpg };
