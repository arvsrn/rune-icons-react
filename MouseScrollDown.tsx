import * as React from "react";
import type { SVGProps } from "react";
const MouseScrollDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.5 5.5V9.5C3.5 10.5609 3.92143 11.5783 4.67157 12.3284C5.42172 13.0786 6.43913 13.5 7.5 13.5C8.56087 13.5 9.57828 13.0786 10.3284 12.3284C11.0786 11.5783 11.5 10.5609 11.5 9.5V5.5C11.5 4.43913 11.0786 3.42172 10.3284 2.67157C9.57828 1.92143 8.56087 1.5 7.5 1.5C6.43913 1.5 5.42172 1.92143 4.67157 2.67157C3.92143 3.42172 3.5 4.43913 3.5 5.5Z"
      stroke="currentColor"
    />
    <path d="M9.5 8.5L7.5 10.5L5.5 8.5" stroke="currentColor" />
  </svg>
);
export { MouseScrollDown };
