import * as React from "react";
import type { SVGProps } from "react";
const WalletSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_475_4096)">
      <mask
        id="mask0_475_4096"
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
      <g mask="url(#mask0_475_4096)">
        <path
          d="M13.5 8V7.5C13.5 6.96957 13.2893 6.46086 12.9142 6.08579C12.5391 5.71071 12.0304 5.5 11.5 5.5H3.5C2.96957 5.5 2.46086 5.71071 2.08579 6.08579C1.71071 6.46086 1.5 6.96957 1.5 7.5V10.5C1.5 11.0304 1.71071 11.5391 2.08579 11.9142C2.46086 12.2893 2.96957 12.5 3.5 12.5H8"
          stroke="currentColor"
        />
        <path
          d="M1.5 8V4.5C1.5 3.96957 1.71071 3.46086 2.08579 3.08579C2.46086 2.71071 2.96957 2.5 3.5 2.5H8.5C9.03043 2.5 9.53914 2.71071 9.91421 3.08579C10.2893 3.46086 10.5 3.96957 10.5 4.5V5.5M12 7.5H9"
          stroke="currentColor"
        />
        <path
          d="M11.5 13.5C12.6046 13.5 13.5 12.6046 13.5 11.5C13.5 10.3954 12.6046 9.5 11.5 9.5C10.3954 9.5 9.5 10.3954 9.5 11.5C9.5 12.6046 10.3954 13.5 11.5 13.5Z"
          stroke="currentColor"
        />
        <path d="M13 13L15 15" stroke="currentColor" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_475_4096">
        <rect width={15} height={15} fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);
export { WalletSearch };
