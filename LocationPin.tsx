import * as React from "react";
import type { SVGProps } from "react";
const LocationPin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.5 6.5C11.5 8.71 9.71 12.5 7.5 12.5C5.29 12.5 3.5 8.71 3.5 6.5C3.5 5.43913 3.92143 4.42172 4.67157 3.67157C5.42172 2.92143 6.43913 2.5 7.5 2.5C8.56087 2.5 9.57828 2.92143 10.3284 3.67157C11.0786 4.42172 11.5 5.43913 11.5 6.5Z"
      stroke="currentColor"
    />
    <path
      d="M7.5 8.5C8.60457 8.5 9.5 7.60457 9.5 6.5C9.5 5.39543 8.60457 4.5 7.5 4.5C6.39543 4.5 5.5 5.39543 5.5 6.5C5.5 7.60457 6.39543 8.5 7.5 8.5Z"
      stroke="currentColor"
    />
  </svg>
);
export { LocationPin };
