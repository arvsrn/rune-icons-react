import * as React from "react";
import type { SVGProps } from "react";
const PinArea = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.5 5.5C11.5 7.71 9.71 11.5 7.5 11.5C5.29 11.5 3.5 7.71 3.5 5.5C3.5 4.43913 3.92143 3.42172 4.67157 2.67157C5.42172 1.92143 6.43913 1.5 7.5 1.5C8.56087 1.5 9.57828 1.92143 10.3284 2.67157C11.0786 3.42172 11.5 4.43913 11.5 5.5Z"
      stroke="currentColor"
    />
    <path
      d="M7.5 7.5C8.60457 7.5 9.5 6.60457 9.5 5.5C9.5 4.39543 8.60457 3.5 7.5 3.5C6.39543 3.5 5.5 4.39543 5.5 5.5C5.5 6.60457 6.39543 7.5 7.5 7.5Z"
      stroke="currentColor"
    />
    <path
      d="M12 10.123C13.134 10.561 13.5 11.133 13.5 11.5C13.5 12.167 12.3 13.5 7.5 13.5C2.7 13.5 1.5 12.167 1.5 11.5C1.5 11.132 1.866 10.561 3 10.123"
      stroke="currentColor"
    />
  </svg>
);
export { PinArea };
