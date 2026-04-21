import { useId } from "react";

export function LogoMark() {
  const gid = useId().replace(/:/g, "");
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="36" height="36" rx="10" fill={`url(#${gid})`} />
      <path d="M18 10L23 17H13L18 10Z" fill="white" />
      <path d="M13 20L18 27L23 20H13Z" fill="white" />
      <defs>
        <linearGradient
          id={gid}
          x1="8"
          y1="4"
          x2="32"
          y2="34"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4f46e5" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
    </svg>
  );
}
