import * as React from "react";
import type { SVGProps } from "react";
const Corners = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 6V5.5C12.5 4.70435 12.1839 3.94129 11.6213 3.37868C11.0587 2.81607 10.2956 2.5 9.5 2.5H9M12.5 9V9.5C12.5 10.2956 12.1839 11.0587 11.6213 11.6213C11.0587 12.1839 10.2956 12.5 9.5 12.5H9M2.5 6V5.5C2.5 4.70435 2.81607 3.94129 3.37868 3.37868C3.94129 2.81607 4.70435 2.5 5.5 2.5H6M2.5 9V9.5C2.5 10.2956 2.81607 11.0587 3.37868 11.6213C3.94129 12.1839 4.70435 12.5 5.5 12.5H6"
      stroke="currentColor"
    />
  </svg>
);
export { Corners };
