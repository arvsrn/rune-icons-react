import * as React from "react";
import type { SVGProps } from "react";
const ImageSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 10.5V11.5C1.5 12.0304 1.71071 12.5391 2.08579 12.9142C2.46086 13.2893 2.96957 13.5 3.5 13.5H7M1.5 10.5V3.5C1.5 2.96957 1.71071 2.46086 2.08579 2.08579C2.46086 1.71071 2.96957 1.5 3.5 1.5H11.5C12.0304 1.5 12.5391 1.71071 12.9142 2.08579C13.2893 2.46086 13.5 2.96957 13.5 3.5V7M1.5 10.5L5.5 6.5L6.571 8M9.5 4.5V5.5H10.5V4.5H9.5Z"
      stroke="currentColor"
    />
    <path
      d="M10.5 12.5C11.6046 12.5 12.5 11.6046 12.5 10.5C12.5 9.39543 11.6046 8.5 10.5 8.5C9.39543 8.5 8.5 9.39543 8.5 10.5C8.5 11.6046 9.39543 12.5 10.5 12.5Z"
      stroke="currentColor"
    />
    <path d="M12 12L14 14" stroke="currentColor" />
  </svg>
);
export { ImageSearch };
