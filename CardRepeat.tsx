import * as React from "react";
import type { SVGProps } from "react";
const CardRepeat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 5.5V4.5C1.5 3.96957 1.71071 3.46086 2.08579 3.08579C2.46086 2.71071 2.96957 2.5 3.5 2.5H11.5C12.0304 2.5 12.5391 2.71071 12.9142 3.08579C13.2893 3.46086 13.5 3.96957 13.5 4.5V5.5M1.5 5.5V10.5C1.5 11.0304 1.71071 11.5391 2.08579 11.9142C2.46086 12.2893 2.96957 12.5 3.5 12.5H6M1.5 5.5H13.5M13.5 5.5V6M3 7.5H6"
      stroke="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 10.25V10.053C8.077 9.712 8.29 9.201 8.68 8.776C9.077 8.345 9.657 8 10.5 8C11.172 8 11.573 8.212 11.887 8.509C12.042 8.656 12.175 8.819 12.305 9H11V10H14V7H13V8.26C12.8703 8.08983 12.7275 7.93002 12.573 7.782C12.08 7.315 11.434 7 10.5 7C9.343 7 8.506 7.488 7.945 8.099C7.48035 8.60742 7.15786 9.2293 7.01 9.902L7 9.95V10.25H8ZM13 10.75V10.947C12.923 11.288 12.71 11.799 12.32 12.224C11.923 12.655 11.343 13 10.5 13C9.826 13 9.404 12.786 9.07 12.484C8.91164 12.3367 8.76766 12.1746 8.64 12H10V11H7V14H8V12.803C8.123 12.952 8.256 13.095 8.4 13.226C8.91 13.686 9.567 14 10.5 14C11.657 14 12.494 13.512 13.056 12.901C13.5203 12.3925 13.8424 11.7706 13.99 11.098L14 11.049V10.75H13Z"
      fill="currentColor"
    />
  </svg>
);
export { CardRepeat };