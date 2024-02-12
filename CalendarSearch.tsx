import * as React from "react";
import type { SVGProps } from "react";
const CalendarSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.5 1V4M4.5 1V4M3.5 5.5H11.5M13.5 6V4.5C13.5 3.96957 13.2893 3.46086 12.9142 3.08579C12.5391 2.71071 12.0304 2.5 11.5 2.5H3.5C2.96957 2.5 2.46086 2.71071 2.08579 3.08579C1.71071 3.46086 1.5 3.96957 1.5 4.5V10.5C1.5 11.0304 1.71071 11.5391 2.08579 11.9142C2.46086 12.2893 2.96957 12.5 3.5 12.5H7"
      stroke="currentColor"
    />
    <path
      d="M10.5 11.5C11.6046 11.5 12.5 10.6046 12.5 9.5C12.5 8.39543 11.6046 7.5 10.5 7.5C9.39543 7.5 8.5 8.39543 8.5 9.5C8.5 10.6046 9.39543 11.5 10.5 11.5Z"
      stroke="currentColor"
    />
    <path d="M12 11L14 13" stroke="currentColor" />
  </svg>
);
export { CalendarSearch };
