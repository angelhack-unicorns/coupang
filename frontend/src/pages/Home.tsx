import { SearchField } from '../components/ui/search-field';
import AdsCarousel from '../components/AdsCarousel';
import HandbagIcon from '../components/ui/icons/HandbagIcon';
import { Button } from '../components/ui';
import MicrophoneIcon from '../components/ui/icons/MicrophoneIcon';
import { useNavigate } from 'react-router-dom';
export default function HomePage() {
  const navigate = useNavigate();

  const quickLinksImgs: string[] = [
    '/quicklinks/4siganman.png',
    '/quicklinks/camera.png',
    '/quicklinks/fashion_e.png',
    '/quicklinks/lemon.png',
    '/quicklinks/makeup.png',
    '/quicklinks/omp-promotion.png',
    '/quicklinks/rocketdelivery.png',
    '/quicklinks/shampoo.png',
    '/quicklinks/sofa.png',
    '/quicklinks/warehouse_icon.png',
  ];

  const shopObjList = [
    {
      img: null,
      name: '탐사 강화코팅 정밀 드라이버 세트 24p',
      discount: '33% 15,500원',
      price: '10,290원',
    },
    {
      img: null,
      name: '탐사 강화코팅 정밀 드라이버 세트 24p',
      discount: '33% 15,500원',
      price: '10,290원',
    },
    {
      img: null,
      name: '탐사 강화코팅 정밀 드라이버 세트 24p',
      discount: '33% 15,500원',
      price: '10,290원',
    },
    {
      img: null,
      name: '탐사 강화코팅 정밀 드라이버 세트 24p',
      discount: '33% 15,500원',
      price: '10,290원',
    },
    {
      img: null,
      name: '탐사 강화코팅 정밀 드라이버 세트 24p',
      discount: '33% 15,500원',
      price: '10,290원',
    },
    {
      img: null,
      name: '탐사 강화코팅 정밀 드라이버 세트 24p',
      discount: '33% 15,500원',
      price: '10,290원',
    },
  ];

  return (
    <article className='flex flex-col h-full'>
      {/* Fixed search and microphone inputs */}
      {/*  */}
      {/* Scrollable content */}
      <div className='flex-grow overflow-y-auto'>
        <AdsCarousel />

        {/* quicklinks section (placeholder) */}
        <div className='grid grid-rows-2 grid-cols-5 gap-1 p-2'>
          {quickLinksImgs.map((src: string, i: number) => (
            <div key={i} className='w-full bg-yellow-200 aspect-square'>
              <img src={`${src}`} className='h-12 w-12 mx-auto' />
              <div className=' flex justify-center'>
                <p className='text-sm'> 지금 할인중 </p>
              </div>
            </div>
          ))}
        </div>

        {/* 70% off ad image */}
        <img
          src='ads/70.jpg'
          width={101}
          height={24}
          className='w-full h-24' // Fixed height for image
        />

        {/* products recommendations */}
        <section className='flex items-center gap-x-4 m-4'>
          <HandbagIcon />
          <span className='text-xl font-bold'>이 상품 놓치지 마세요!</span>
          <span className='text-xl text-blue-500 ml-auto'>더보기 &gt;</span>
        </section>

        <div className='flex flex-col gap-4 p-2'>
          <p className='text-2xl'>내가 본 상품의 연관 상품</p>
          <div className='grid grid-cols-3 gap-1'>
            {shopObjList.map((item) => (
              <div className='  flex flex-col gap-2'>
                <div className='h-[10em] bg-green-200'></div>
                <div>
                  <p className='text-md'>{item.name}</p>
                  <p className='text-sm text-slate-500 line-through'>
                    {item.discount}
                  </p>
                  <p className='text-xl text-red-700'>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
