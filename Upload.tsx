import * as React from "react";
import type { SVGProps } from "react";
const Upload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 11.5H11C12.38 11.5 13.5 10.13 13.5 8.75C13.5 8.08696 13.2366 7.45107 12.7678 6.98223C12.2989 6.51339 11.663 6.25 11 6.25C11 4.179 9.571 2.5 7.5 2.5C5.857 2.5 4.71 3.557 4.204 5.028C3.45502 5.13004 2.76838 5.50002 2.27123 6.06943C1.77408 6.63884 1.50009 7.3691 1.5 8.125C1.5 9.851 2.9 11.5 4.625 11.5H5M7.5 13V6.5M7.5 6.5L5 9M7.5 6.5L10 9"
      stroke="currentColor"
    />
  </svg>
);
export { Upload };
