import * as React from "react";
import type { SVGProps } from "react";
const Home = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.5 13.5H3.5C2.96957 13.5 2.46086 13.2893 2.08579 12.9142C1.71071 12.5391 1.5 12.0304 1.5 11.5V5.5L7.5 1.5L13.5 5.5V11.5C13.5 12.0304 13.2893 12.5391 12.9142 12.9142C12.5391 13.2893 12.0304 13.5 11.5 13.5H9.5M5.5 13.5V9.5C5.5 8.96957 5.71071 8.46086 6.08579 8.08579C6.46086 7.71071 6.96957 7.5 7.5 7.5C8.03043 7.5 8.53914 7.71071 8.91421 8.08579C9.28929 8.46086 9.5 8.96957 9.5 9.5V13.5M5.5 13.5H9.5"
      stroke="currentColor"
    />
  </svg>
);
export { Home };
