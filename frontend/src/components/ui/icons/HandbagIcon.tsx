import type { SVGProps } from 'react';

export default function HandbagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 36 36'
      {...props}
    >
      <path
        fill='#ffac33'
        d='M28 22a1 1 0 0 1-1-1v-6c0-6.065-4.037-11-9-11c-4.962 0-9 4.935-9 11v6a1 1 0 1 1-2 0v-6C7 7.832 11.935 2 18 2s11 5.832 11 13v6a1 1 0 0 1-1 1'
      ></path>
      <path
        fill='#9266cc'
        d='M33.386 12.972C33.126 10.788 31.114 9 28.914 9H7.086c-2.2 0-4.212 1.788-4.472 3.972L.472 31.028C.212 33.213 1.8 35 4 35h28c2.2 0 3.788-1.787 3.528-3.972z'
      ></path>
      <path
        fill='#ffd983'
        d='M28 20a1 1 0 0 1-1-1v-6c0-6.065-4.037-11-9-11c-4.962 0-9 4.935-9 11v6a1 1 0 1 1-2 0v-6C7 5.832 11.935 0 18 0s11 5.832 11 13v6a1 1 0 0 1-1 1'
      ></path>
    </svg>
  );
}
