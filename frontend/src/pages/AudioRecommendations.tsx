import BackButton from '../components/ui/icons/BackButton';
import CameraIcon from '../components/ui/icons/CameraIcon';
import CartItem from '../components/CartItem';

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

export default function AudioRecommendations({items}: {items: Item[]}) {
  return (
    <>
      <div className='flex mt-0 mb-2 w-full px-2 text-black justify-between'>
        <BackButton className='mr-auto ml-2' />
        <CameraIcon className='mr-2 ml-auto' stroke="black" />
      </div>
      <hr className="my-0 h-0.5 border-t-0 bg-neutral-300 dark:bg-white/10" />
      <div className="h-96 overflow-auto space-y-2">
        {items.flatMap(elem=>elem.coupang_info).map((item, i) => (
          <>
            <CartItem {...item} />
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-200 dark:bg-white/10" />
          </>

        ))
        }
      </div>
      <hr className="my-0 h-0.5 border-t-0 bg-neutral-300 dark:bg-white/10" />
    </>
  );
}
