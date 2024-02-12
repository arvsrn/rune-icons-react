import * as React from "react";
import type { SVGProps } from "react";
const FileDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 6.5H7.5V1.5M12.5 6.5C12.5 5 9 1.5 7.5 1.5M12.5 6.5V8M7.5 1.5H4.5C3.96957 1.5 3.46086 1.71071 3.08579 2.08579C2.71071 2.46086 2.5 2.96957 2.5 3.5V11.5C2.5 12.0304 2.71071 12.5391 3.08579 12.9142C3.46086 13.2893 3.96957 13.5 4.5 13.5H7M10.5 8V13.5M10.5 13.5L13 11M10.5 13.5L8 11"
      stroke="currentColor"
    />
  </svg>
);
export { FileDown };
