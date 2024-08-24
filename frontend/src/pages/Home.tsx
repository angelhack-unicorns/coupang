import AdsCarousel from '../components/AdsCarousel';
import HomeNav from '../components/HomeNav';
import HandbagIcon from '../components/ui/icons/HandbagIcon';

export default function HomePage() {
  const quickLinksImgs: object[] = [
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

  const recImgs: object[] = [
    { img: 'https://t1a.coupangcdn.com/thumbnails/remote/300x300ex/image/retail/images/3477670768361062-603d1288-48e6-40ec-b5a6-0013ea89a300.jpg', desc: '지금할인중' },
    { img: 'https://t1a.coupangcdn.com/thumbnails/remote/300x300ex/image/0820_amir_esrgan_inf40k_batch_1_max3k/30ce/6a1baab1f591096755f43b0fbd33807c4a8addb7b7d960a5e78fb80a0532.jpg', desc: '참고할인' },
    { img: 'https://t1a.coupangcdn.com/thumbnails/remote/300x300ex/image/retail/images/539765132265702-e6a63a80-3a20-4776-959e-2d6961bca633.jpg', desc: '판매자 특가' },
    { img: 'https://t1a.coupangcdn.com/thumbnails/remote/300x300ex/image/retail/images/744736518743785-f4932dbf-8404-4209-8535-35fa847f8ab7.jpg', desc: '로켓배송' },
    { img: 'https://t1a.coupangcdn.com/thumbnails/remote/300x300ex/image/retail/images/423307006260104-8f83231e-2dfc-4fed-8e54-8daae12aa7f7.jpg', desc: '패셩/잡화' },
    { img: 'https://t1a.coupangcdn.com/thumbnails/remote/300x300ex/image/retail/images/539765132265702-e6a63a80-3a20-4776-959e-2d6961bca633.jpg', desc: '홈데코/취미' },
  ];

  const shopObjList = [
    {
      img: 'https://t1a.coupangcdn.com/thumbnails/remote/300x300ex/image/retail/images/3477670768361062-603d1288-48e6-40ec-b5a6-0013ea89a300.jpg',
      name: '탐사 강화코팅 정밀 드라이버 세트 24p',
      discount: '33% 15,500원',
      price: '10,290원',
    },
    {
      img: 'https://t1a.coupangcdn.com/thumbnails/remote/300x300ex/image/retail/images/539765132265702-e6a63a80-3a20-4776-959e-2d6961bca633.jpg',
      name: '탐사 강화코팅 정밀 드라이버 세트 24p',
      discount: '33% 15,500원',
      price: '10,290원',
    },
    {
      img: 'https://t1a.coupangcdn.com/thumbnails/remote/300x300ex/image/0820_amir_esrgan_inf40k_batch_1_max3k/30ce/6a1baab1f591096755f43b0fbd33807c4a8addb7b7d960a5e78fb80a0532.jpg',
      name: '탐사 강화코팅 정밀 드라이버 세트 24p',
      discount: '33% 15,500원',
      price: '10,290원',
    },
    {
      img: 'https://t1a.coupangcdn.com/thumbnails/remote/300x300ex/image/retail/images/744736518743785-f4932dbf-8404-4209-8535-35fa847f8ab7.jpg',
      name: '탐사 강화코팅 정밀 드라이버 세트 24p',
      discount: '33% 15,500원',
      price: '10,290원',
    },
    {
      img: 'https://t1a.coupangcdn.com/thumbnails/remote/300x300ex/image/retail/images/423307006260104-8f83231e-2dfc-4fed-8e54-8daae12aa7f7.jpg',
      name: '탐사 강화코팅 정밀 드라이버 세트 24p',
      discount: '33% 15,500원',
      price: '10,290원',
    },
    {
      img: 'https://t1a.coupangcdn.com/thumbnails/remote/300x300ex/image/retail/images/539765132265702-e6a63a80-3a20-4776-959e-2d6961bca633.jpg',
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
            {quickLinksImgs.map((src: object, i: number) => (
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
                  {/* <div className='h-[10em] bg-green-200'></div> */}
                  <img src={item.img}></img>
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
