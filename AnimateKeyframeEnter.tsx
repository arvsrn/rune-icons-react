import * as React from "react";
import type { SVGProps } from "react";
const AnimateKeyframeEnter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.5 7.5L5 10M7.5 7.5L5 5M7.5 7.5H2M6 4L6.086 3.914C6.46106 3.53906 6.96967 3.32843 7.5 3.32843C8.03033 3.32843 8.53894 3.53906 8.914 3.914L11.086 6.086C11.4609 6.46106 11.6716 6.96967 11.6716 7.5C11.6716 8.03033 11.4609 8.53895 11.086 8.914L8.914 11.086C8.53894 11.4609 8.03033 11.6716 7.5 11.6716C6.96967 11.6716 6.46106 11.4609 6.086 11.086L6 11"
      stroke="currentColor"
    />
  </svg>
);
export { AnimateKeyframeEnter };
