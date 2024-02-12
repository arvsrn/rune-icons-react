import * as React from "react";
import type { SVGProps } from "react";
const LinkNone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 10.5H10.5C11.2956 10.5 12.0587 10.1839 12.6213 9.62132C13.1839 9.05871 13.5 8.29565 13.5 7.5C13.5 6.70435 13.1839 5.94129 12.6213 5.37868C12.0587 4.81607 11.2956 4.5 10.5 4.5H9M6 10.5H4.5C3.70435 10.5 2.94129 10.1839 2.37868 9.62132C1.81607 9.05871 1.5 8.29565 1.5 7.5C1.5 6.70435 1.81607 5.94129 2.37868 5.37868C2.94129 4.81607 3.70435 4.5 4.5 4.5H6"
      stroke="currentColor"
    />
  </svg>
);
export { LinkNone };
