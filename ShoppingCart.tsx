import * as React from "react";
import type { SVGProps } from "react";
const ShoppingCart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.5 9.5L5.02 9.637L5.123 10H5.5V9.5ZM11.5 9.5V10H11.838L11.964 9.686L11.5 9.5ZM3.5 2.5L3.98 2.363L3.878 2H3.5V2.5ZM13.5 4.5L13.964 4.686L13.5 4V4.5ZM5.5 10H11.5V9H5.5V10ZM3.5 2H1V3H3.5V2ZM5.98 9.363L4.552 4.363L3.591 4.637L5.02 9.637L5.98 9.363ZM4.552 4.363L3.98 2.363L3.019 2.637L3.591 4.637L4.552 4.363ZM13.5 4H4.071V5H13.5V4ZM13.036 4.314L11.036 9.314L11.964 9.686L13.964 4.686L13.036 4.314ZM12 12C12 11.7348 11.8946 11.4804 11.7071 11.2929C11.5196 11.1054 11.2652 11 11 11V12H12ZM11 13C11.2652 13 11.5196 12.8946 11.7071 12.7071C11.8946 12.5196 12 12.2652 12 12H11V13ZM10 12C10 12.2652 10.1054 12.5196 10.2929 12.7071C10.4804 12.8946 10.7348 13 11 13V12H10ZM11 12V11C10.7348 11 10.4804 11.1054 10.2929 11.2929C10.1054 11.4804 10 11.7348 10 12H11ZM7 12C7 11.7348 6.89464 11.4804 6.70711 11.2929C6.51957 11.1054 6.26522 11 6 11V12H7ZM6 13C6.26522 13 6.51957 12.8946 6.70711 12.7071C6.89464 12.5196 7 12.2652 7 12H6V13ZM5 12C5 12.2652 5.10536 12.5196 5.29289 12.7071C5.48043 12.8946 5.73478 13 6 13V12H5ZM6 12V11C5.73478 11 5.48043 11.1054 5.29289 11.2929C5.10536 11.4804 5 11.7348 5 12H6Z"
      fill="currentColor"
    />
  </svg>
);
export { ShoppingCart };
