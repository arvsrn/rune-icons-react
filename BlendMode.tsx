import * as React from "react";
import type { SVGProps } from "react";
const BlendMode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 11.5C5.283 11.5 4.602 9.794 4.511 8.745C4.49913 8.58231 4.51606 8.41881 4.561 8.262C5.102 6.272 6.348 3.5 7.5 3.5C8.652 3.5 9.899 6.271 10.438 8.262C10.481 8.42 10.503 8.582 10.489 8.745C10.398 9.794 9.717 11.5 7.5 11.5Z"
      stroke="currentColor"
    />
  </svg>
);
export { BlendMode };
