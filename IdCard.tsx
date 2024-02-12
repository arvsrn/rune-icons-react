import * as React from "react";
import type { SVGProps } from "react";
const IdCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M3.5 5.5V8.5H6.5V5.5H3.5Z" fill="currentColor" />
    <path
      d="M8 5.5H12M8 7.5H12M8 9.5H11M3.5 5.5V8.5H6.5V5.5H3.5ZM13.5 4.5V10.5C13.5 10.7652 13.3946 11.0196 13.2071 11.2071C13.0196 11.3946 12.7652 11.5 12.5 11.5H2.5C2.23478 11.5 1.98043 11.3946 1.79289 11.2071C1.60536 11.0196 1.5 10.7652 1.5 10.5V4.5C1.5 4.23478 1.60536 3.98043 1.79289 3.79289C1.98043 3.60536 2.23478 3.5 2.5 3.5H12.5C12.7652 3.5 13.0196 3.60536 13.2071 3.79289C13.3946 3.98043 13.5 4.23478 13.5 4.5Z"
      stroke="currentColor"
    />
  </svg>
);
export { IdCard };
