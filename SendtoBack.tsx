import * as React from "react";
import type { SVGProps } from "react";
const SendtoBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 1.5H3C2.17157 1.5 1.5 2.17157 1.5 3V9C1.5 9.82843 2.17157 10.5 3 10.5H9C9.82843 10.5 10.5 9.82843 10.5 9V3C10.5 2.17157 9.82843 1.5 9 1.5Z"
      stroke="currentColor"
      strokeDasharray="2 2"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 11V12C4 12.5304 4.21071 13.0391 4.58579 13.4142C4.96086 13.7893 5.46957 14 6 14H12C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H11V5H12C12.2652 5 12.5196 5.10536 12.7071 5.29289C12.8946 5.48043 13 5.73478 13 6V12C13 12.2652 12.8946 12.5196 12.7071 12.7071C12.5196 12.8946 12.2652 13 12 13H6C5.73478 13 5.48043 12.8946 5.29289 12.7071C5.10536 12.5196 5 12.2652 5 12V11H4Z"
      fill="currentColor"
    />
  </svg>
);
export { SendtoBack };
