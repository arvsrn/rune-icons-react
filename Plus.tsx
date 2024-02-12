import * as React from "react";
import type { SVGProps } from "react";
const Plus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 7.5H3M7.5 12V3" stroke="currentColor" />
  </svg>
);
export { Plus };
