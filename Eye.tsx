import * as React from "react";
import type { SVGProps } from "react";
const Eye = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.5 7.5C13.5 8.532 12.896 9.52 11.812 10.27C10.729 11.02 9.206 11.5 7.5 11.5C5.794 11.5 4.271 11.02 3.188 10.27C2.104 9.52 1.5 8.533 1.5 7.5C1.5 6.467 2.104 5.48 3.188 4.73C4.271 3.98 5.794 3.5 7.5 3.5C9.206 3.5 10.729 3.98 11.812 4.73C12.896 5.48 13.5 6.468 13.5 7.5Z"
      stroke="currentColor"
    />
    <path
      d="M7.5 9C8.32843 9 9 8.32843 9 7.5C9 6.67157 8.32843 6 7.5 6C6.67157 6 6 6.67157 6 7.5C6 8.32843 6.67157 9 7.5 9Z"
      fill="currentColor"
    />
  </svg>
);
export { Eye };
