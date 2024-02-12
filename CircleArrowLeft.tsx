import * as React from "react";
import type { SVGProps } from "react";
const CircleArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 13.5C10.8137 13.5 13.5 10.8137 13.5 7.5C13.5 4.18629 10.8137 1.5 7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5C1.5 10.8137 4.18629 13.5 7.5 13.5Z"
      stroke="currentColor"
    />
    <path d="M4.5 7.5L7 10M4.5 7.5L7 5M4.5 7.5H11" stroke="currentColor" />
  </svg>
);
export { CircleArrowLeft };
