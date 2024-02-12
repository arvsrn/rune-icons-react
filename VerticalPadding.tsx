import * as React from "react";
import type { SVGProps } from "react";
const VerticalPadding = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 2.5H2M13 12.5H2M9.5 10.5H5.5C5.23478 10.5 4.98043 10.3946 4.79289 10.2071C4.60536 10.0196 4.5 9.76522 4.5 9.5V5.5C4.5 5.23478 4.60536 4.98043 4.79289 4.79289C4.98043 4.60536 5.23478 4.5 5.5 4.5H9.5C9.76522 4.5 10.0196 4.60536 10.2071 4.79289C10.3946 4.98043 10.5 5.23478 10.5 5.5V9.5C10.5 9.76522 10.3946 10.0196 10.2071 10.2071C10.0196 10.3946 9.76522 10.5 9.5 10.5Z"
      stroke="currentColor"
    />
  </svg>
);
export { VerticalPadding };
