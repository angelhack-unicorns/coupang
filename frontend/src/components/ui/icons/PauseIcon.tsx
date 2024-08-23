import type { SVGProps } from 'react';

export default function PauseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={36}
      height={36}
      viewBox='0 0 20 20'
      {...props}
    >
      <path
        fill='#a0b1b1'
        d='M5.75 3a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75A.75.75 0 0 0 7.25 3zm7 0a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75z'
      ></path>
    </svg>
  );
}
