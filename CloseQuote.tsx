import * as React from "react";
import type { SVGProps } from "react";
const CloseQuote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.5 3.5C9.39543 3.5 8.5 4.39543 8.5 5.5C8.5 6.60457 9.39543 7.5 10.5 7.5C11.6046 7.5 12.5 6.60457 12.5 5.5C12.5 4.39543 11.6046 3.5 10.5 3.5Z"
      stroke="currentColor"
    />
    <path
      d="M4.5 3.5C3.39543 3.5 2.5 4.39543 2.5 5.5C2.5 6.60457 3.39543 7.5 4.5 7.5C5.60457 7.5 6.5 6.60457 6.5 5.5C6.5 4.39543 5.60457 3.5 4.5 3.5Z"
      stroke="currentColor"
    />
    <path
      d="M12.5 5.5V7.5C12.5 8.833 11.9 11.5 9.5 11.5M6.5 5.5V7.5C6.5 8.833 5.9 11.5 3.5 11.5"
      stroke="currentColor"
    />
  </svg>
);
export { CloseQuote };
