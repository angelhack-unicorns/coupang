import AdsCarousel from '../components/AdsCarousel';
import HomeNav from '../components/HomeNav';
import HandbagIcon from '../components/ui/icons/HandbagIcon';

export default function HomePage() {
  const quickLinksImgs = [
    { img: '/quicklinks/4siganman.png', desc: '지금할인중' },
    { img: '/quicklinks/camera.png', desc: '참고할인' },
    { img: '/quicklinks/fashion_e.png', desc: '판매자 특가' },
    { img: '/quicklinks/lemon.png', desc: '로켓배송' },
    { img: '/quicklinks/makeup.png', desc: '패셩/잡화' },
    { img: '/quicklinks/omp-promotion.png', desc: '홈데코/취미' },
    { img: '/quicklinks/rocketdelivery.png', desc: '가전디지털' },
    { img: '/quicklinks/shampoo.png', desc: '식품' },
    { img: '/quicklinks/sofa.png', desc: '생활용품' },
    { img: '/quicklinks/warehouse_icon.png', desc: '뷰티' },
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
    <>
      <div className="sticky top-0 z-10 ">
        <HomeNav />
      </div>
      <article className='flex flex-col h-full'>
        {/* Fixed search and microphone inputs */}
        {/*  */}
        {/* Scrollable content */}
        <div className='flex-grow overflow-y-auto'>
          <AdsCarousel />

          {/* quicklinks section (placeholder) */}
          <div className='grid grid-rows-2 grid-cols-5 gap-1 p-2'>
            {quickLinksImgs.map((src: string, i: number) => (
              <div key={i} className='w-full aspect-square'>
                <img src={`${src.img}`} className='h-12 w-12 mx-auto' />
                <div className=' flex justify-center'>
                  <p className='text-sm'> {src.desc} </p>
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
    </>
  );
}
