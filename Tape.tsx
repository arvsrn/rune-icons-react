import * as React from "react";
import type { SVGProps } from "react";
const Tape = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 5.5C1.5 3.9 4.833 3.5 6.5 3.5C7.833 3.5 11.5 3.9 11.5 5.5M1.5 5.5C1.5 7.1 4.833 7.5 6.5 7.5M1.5 5.5V9.5C1.5 11.1 4.833 11.5 6.5 11.5H12.5C12.7652 11.5 13.0196 11.3946 13.2071 11.2071C13.3946 11.0196 13.5 10.7652 13.5 10.5V8.5C13.5 8.23478 13.3946 7.98043 13.2071 7.79289C13.0196 7.60536 12.7652 7.5 12.5 7.5H6.5M11.5 5.5C11.5 7.1 7.833 7.5 6.5 7.5M11.5 5.5V7.5"
      stroke="currentColor"
    />
  </svg>
);
export { Tape };
