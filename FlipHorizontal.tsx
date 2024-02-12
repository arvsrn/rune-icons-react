import * as React from "react";
import type { SVGProps } from "react";
const FlipHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_475_3641)">
      <mask
        id="mask0_475_3641"
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
      <g mask="url(#mask0_475_3641)">
        <path
          d="M7.5 1V14M15 7.5H9.5M9.5 7.5L12 5M9.5 7.5L12 10M0 7.5H5.5M5.5 7.5L3 10M5.5 7.5L3 5"
          stroke="currentColor"
          strokeLinejoin="bevel"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_475_3641">
        <rect width={15} height={15} fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);
export { FlipHorizontal };
