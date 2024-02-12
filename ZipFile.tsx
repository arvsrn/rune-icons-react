import * as React from "react";
import type { SVGProps } from "react";
const ZipFile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 6.5V11.5C12.5 12.0304 12.2893 12.5391 11.9142 12.9142C11.5391 13.2893 11.0304 13.5 10.5 13.5H4.5C3.96957 13.5 3.46086 13.2893 3.08579 12.9142C2.71071 12.5391 2.5 12.0304 2.5 11.5V3.5C2.5 2.96957 2.71071 2.46086 3.08579 2.08579C3.46086 1.71071 3.96957 1.5 4.5 1.5H7.5M12.5 6.5H7.5V1.5M12.5 6.5C12.5 5 9 1.5 7.5 1.5M4.5 6V7M5.5 7V8M4.5 2V3M5.5 3V4M4.5 4V5M5.5 5V6"
      stroke="currentColor"
    />
  </svg>
);
export { ZipFile };
