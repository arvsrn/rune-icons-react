import * as React from "react";
import type { SVGProps } from "react";
const Ruler = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.5 4.5H13.5C13.7652 4.5 14.0196 4.60536 14.2071 4.79289C14.3946 4.98043 14.5 5.23478 14.5 5.5V9.5C14.5 9.76522 14.3946 10.0196 14.2071 10.2071C14.0196 10.3946 13.7652 10.5 13.5 10.5H1.5C1.23478 10.5 0.98043 10.3946 0.792893 10.2071C0.605357 10.0196 0.5 9.76522 0.5 9.5V5.5C0.5 5.23478 0.605357 4.98043 0.792893 4.79289C0.98043 4.60536 1.23478 4.5 1.5 4.5H2.5M10.5 4.5V8M10.5 4.5H8.5M2.5 4.5H4.5M2.5 4.5V7M8.5 4.5V7M8.5 4.5H6.5M6.5 4.5V7M6.5 4.5H4.5M4.5 4.5V8M12.5 4.5V7"
      stroke="currentColor"
    />
  </svg>
);
export { Ruler };
