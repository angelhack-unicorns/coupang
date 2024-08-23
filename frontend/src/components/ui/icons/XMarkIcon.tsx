import type { SVGProps } from 'react';

export default function XMarkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={36}
      height={36}
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='none'
        stroke='#a0b1b1'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.95}
        d='M6 18L18 6M6 6l12 12'
      ></path>
    </svg>
  );
}
