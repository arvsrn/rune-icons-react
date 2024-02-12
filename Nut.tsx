import * as React from "react";
import type { SVGProps } from "react";
const Nut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1.5 5V10L5 13.5H10L13.5 10V5L10 1.5H5L1.5 5Z" stroke="currentColor" />
    <path
      d="M5.50006 9.50006C5.7627 9.7627 6.07451 9.97104 6.41767 10.1132C6.76083 10.2553 7.12862 10.3285 7.50006 10.3285C7.87149 10.3285 8.23929 10.2553 8.58245 10.1132C8.92561 9.97104 9.23741 9.7627 9.50006 9.50006C9.7627 9.23741 9.97104 8.92561 10.1132 8.58245C10.2553 8.23929 10.3285 7.87149 10.3285 7.50006C10.3285 7.12862 10.2553 6.76083 10.1132 6.41767C9.97104 6.07451 9.7627 5.7627 9.50006 5.50006C8.96963 4.96963 8.2502 4.67163 7.50006 4.67163C6.74991 4.67163 6.03049 4.96963 5.50006 5.50006C4.96963 6.03049 4.67163 6.74991 4.67163 7.50006C4.67163 8.2502 4.96963 8.96963 5.50006 9.50006Z"
      stroke="currentColor"
    />
  </svg>
);
export { Nut };