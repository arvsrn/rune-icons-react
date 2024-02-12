import * as React from "react";
import type { SVGProps } from "react";
const WalletDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_475_4076)">
      <mask
        id="mask0_475_4076"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={15}
        height={15}
      >
        <path d="M0 0H15V15H0V0Z" fill="currentColor" />
      </mask>
      <g mask="url(#mask0_475_4076)">
        <path
          d="M13.5 8V7.5C13.5 6.96957 13.2893 6.46086 12.9142 6.08579C12.5391 5.71071 12.0304 5.5 11.5 5.5H3.5C2.96957 5.5 2.46086 5.71071 2.08579 6.08579C1.71071 6.46086 1.5 6.96957 1.5 7.5V10.5C1.5 11.0304 1.71071 11.5391 2.08579 11.9142C2.46086 12.2893 2.96957 12.5 3.5 12.5H8M11.5 9V14.5M11.5 14.5L14 12M11.5 14.5L9 12"
          stroke="currentColor"
        />
        <path
          d="M1.5 8V4.5C1.5 3.96957 1.71071 3.46086 2.08579 3.08579C2.46086 2.71071 2.96957 2.5 3.5 2.5H8.5C9.03043 2.5 9.53914 2.71071 9.91421 3.08579C10.2893 3.46086 10.5 3.96957 10.5 4.5V5.5M12 7.5H9"
          stroke="currentColor"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_475_4076">
        <rect width={15} height={15} fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);
export { WalletDown };
