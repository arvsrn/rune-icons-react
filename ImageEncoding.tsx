import * as React from "react";
import type { SVGProps } from "react";
const ImageEncoding = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 10.5V11.5C1.5 12.0304 1.71071 12.5391 2.08579 12.9142C2.46086 13.2893 2.96957 13.5 3.5 13.5H7.5M1.5 10.5V3.5C1.5 2.96957 1.71071 2.46086 2.08579 2.08579C2.46086 1.71071 2.96957 1.5 3.5 1.5H7.5M1.5 10.5L5.5 6.5L7.5 9.5M7.5 0V15M9.5 6.5V1.5H13.5M9.5 6.5H13.5V1.5M9.5 6.5L13.5 1.5M9 8.5H10.5C10.7652 8.5 11.0196 8.60536 11.2071 8.79289C11.3946 8.98043 11.5 9.23478 11.5 9.5V13.5M11.5 13.5H9M11.5 13.5H14"
      stroke="currentColor"
    />
  </svg>
);
export { ImageEncoding };
