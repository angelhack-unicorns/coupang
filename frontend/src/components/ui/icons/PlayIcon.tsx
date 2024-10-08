import type { SVGProps } from 'react';

export default function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={36}
      height={36}
      viewBox='0 0 20 20'
      {...props}
    >
      <path
        fill='#ffffff'
        d='M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538z'
      ></path>
    </svg>
  );
}
