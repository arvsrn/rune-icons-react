import * as React from "react";
import type { SVGProps } from "react";
const HamburgerMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M2 3.5H13M13 7.5H2M2 11.5H13" stroke="currentColor" />
  </svg>
);
export { HamburgerMenu };
