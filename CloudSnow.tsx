import * as React from "react";
import type { SVGProps } from "react";
const CloudSnow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 10.948C2.1 10.325 1.5 9.22798 1.5 8.09698C1.50009 7.34109 1.77408 6.61082 2.27123 6.04142C2.76838 5.47201 3.45502 5.10203 4.204 4.99998C4.71 3.52899 5.857 2.47198 7.5 2.47198C9.571 2.47198 11 4.15099 11 6.22199C11.663 6.22199 12.2989 6.48538 12.7678 6.95422C13.2366 7.42306 13.5 8.05894 13.5 8.72198C13.5 9.57498 13.073 10.424 12.42 10.948M8.5 8.99998V9.99998M10.5 9.99998V11M6.5 9.99998V11M4.5 8.99998V9.99998M8.5 11V12M10.5 12V13M6.5 12V13M4.5 11V12"
      stroke="currentColor"
    />
  </svg>
);
export { CloudSnow };
