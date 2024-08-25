import BackButton from '../components/ui/icons/BackButton';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';
import CameraNavIcon from '../components/ui/icons/CameraNavIcon';
import React from 'react';
interface CoupangInfo {
  product_url: string;
  src: string;
  name: string;
  price: string;
}

interface Item {
  name: string;
  category: string;
  reason_for_inclusion: string;
  coupang_info: CoupangInfo[];
}

export default function AudioRecommendations({ items }: { items: Item[] }) {
  const navigate = useNavigate();
  return (
    <>
      <div className='flex mt-0 mb-2 w-full px-2 text-black justify-between'>
        <BackButton
          onClick={() => {
            navigate(-1);
          }}
          className='mr-auto ml-2'
        />
        <CameraNavIcon
          onClick={() => {
            navigate('/voice/camera/');
          }}
          className='mr-2 ml-auto'
          stroke='white'
          fill='white'
        />
      </div>
      <hr className='my-0 h-0.5 border-t-0 bg-neutral-300 dark:bg-white/10' />
      <div className='h-96 overflow-auto space-y-2'>
        {items.map((item, index) => (
          <div key={index}>
            <p className='px-4 py-2 font-semibold border-b-2'>
              Why? {item.reason_for_inclusion}
            </p>
            {item.coupang_info.map((coupangItem, i) => (
              <React.Fragment key={i}>
                <CartItem {...coupangItem} />
                <hr className='my-12 h-0.5 border-t-0 bg-neutral-200 dark:bg-white/10' />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
      <hr className='my-0 h-0.5 border-t-0 bg-neutral-300 dark:bg-white/10' />
    </>
  );
}
