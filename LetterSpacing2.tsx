import * as React from "react";
import type { SVGProps } from "react";
const LetterSpacing2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_475_3807)">
      <mask
        id="mask0_475_3807"
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
      <g mask="url(#mask0_475_3807)">
        <path
          d="M2.5 8V4.5M2.5 4.5V3.5C2.5 2.96957 2.71071 2.46086 3.08579 2.08579C3.46086 1.71071 3.96957 1.5 4.5 1.5C5.03043 1.5 5.53914 1.71071 5.91421 2.08579C6.28929 2.46086 6.5 2.96957 6.5 3.5V4.5M2.5 4.5H6.5M6.5 8V4.5M8.5 8V4.5M8.5 4.5V3.5C8.5 2.96957 8.71071 2.46086 9.08579 2.08579C9.46086 1.71071 9.96957 1.5 10.5 1.5C11.0304 1.5 11.5391 1.71071 11.9142 2.08579C12.2893 2.46086 12.5 2.96957 12.5 3.5V4.5M8.5 4.5H12.5M12.5 8V4.5M14.5 11.5H0.5M14.5 11.5L12 9M14.5 11.5L12 14M0.5 11.5L3 9M0.5 11.5L3 14"
          stroke="currentColor"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_475_3807">
        <rect width={15} height={15} fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);
export { LetterSpacing2 };
