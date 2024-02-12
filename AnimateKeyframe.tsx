import * as React from "react";
import type { SVGProps } from "react";
const AnimateKeyframe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.91394 6.086L6.08594 3.914C6.461 3.53906 6.96961 3.32843 7.49994 3.32843C8.03027 3.32843 8.53889 3.53906 8.91394 3.914L11.0859 6.086C11.4609 6.46106 11.6715 6.96967 11.6715 7.5C11.6715 8.03033 11.4609 8.53895 11.0859 8.914L8.91394 11.086C8.53889 11.4609 8.03027 11.6716 7.49994 11.6716C6.96961 11.6716 6.461 11.4609 6.08594 11.086L3.91394 8.914C3.539 8.53895 3.32837 8.03033 3.32837 7.5C3.32837 6.96967 3.539 6.46106 3.91394 6.086Z"
      stroke="currentColor"
    />
  </svg>
);
export { AnimateKeyframe };
