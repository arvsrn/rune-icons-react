import * as React from "react";
import type { SVGProps } from "react";
const Cloud = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.625 11.5C2.9 11.5 1.5 9.85 1.5 8.125C1.50009 7.3691 1.77408 6.63884 2.27123 6.06943C2.76838 5.50002 3.45502 5.13004 4.204 5.028C4.71 3.557 5.857 2.5 7.5 2.5C9.571 2.5 11 4.179 11 6.25C11.663 6.25 12.2989 6.51339 12.7678 6.98223C13.2366 7.45107 13.5 8.08696 13.5 8.75C13.5 10.13 12.38 11.5 11 11.5H4.625Z"
      stroke="currentColor"
    />
  </svg>
);
export { Cloud };
