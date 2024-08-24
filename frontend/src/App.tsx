import Navbar from './components/Navbar';
import Voice from './components/pages/Voice';
import { SearchField } from './components/ui/search-field';

export default function App() {

  const imgList: string[] = ['/cameraBg.png', '/cameraBg.png', '/cameraBg.png', '/cameraBg.png', '/cameraBg.png', '/cameraBg.png', '/cameraBg.png', '/cameraBg.png', '/cameraBg.png', '/cameraBg.png',]
  const shopObjList = [{ img: null, name: '탐사 강화코팅 정밀 드라이버 세트 24p', discount: '33% 15,500원', price: '10,290원' }, { img: null, name: '탐사 강화코팅 정밀 드라이버 세트 24p', discount: '33% 15,500원', price: '10,290원' }, { img: null, name: '탐사 강화코팅 정밀 드라이버 세트 24p', discount: '33% 15,500원', price: '10,290원' }, { img: null, name: '탐사 강화코팅 정밀 드라이버 세트 24p', discount: '33% 15,500원', price: '10,290원' }, { img: null, name: '탐사 강화코팅 정밀 드라이버 세트 24p', discount: '33% 15,500원', price: '10,290원' }, { img: null, name: '탐사 강화코팅 정밀 드라이버 세트 24p', discount: '33% 15,500원', price: '10,290원' },]
  return (
    <main className='grid gap-y-2'>
      <header className='header-image flex items-center justify-center mt-4'>
        <img src='header.png' width={101} height={24} />
      </header>
      <SearchField aria-label='Search' placeholder='구팡에서 검색하세요!' className='mx-4' />
      <div className='text-3xl font-bold text-center bg-red-500 h-[8em]'>
        Hello World
      </div>

      <div className="grid grid-rows-2 grid-cols-5 gap-1 p-2">
        {imgList.map((src: string, i: number) => (
          <div key={i} className="w-full bg-yellow-200 aspect-square">
            <img src={`${src}`} className="mx-auto" />
            <div className=" flex justify-center">
              <p> 지금 할인중 </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 p-2">
        <p className="text-2xl">내가 본 상품의 연관 상품</p>
        <div className="grid grid-cols-3 gap-1">
          {shopObjList.map((item, i) => (
            <div className="  flex flex-col gap-2">
              <div className="h-[10em] bg-green-200"></div>
              <div>
                <p className="text-md">{item.name}</p>
                <p className="text-sm text-slate-500 line-through">{item.discount}</p>
                <p className="text-xl text-red-700">{item.price}</p>
              </div>
            </div>
          ))}

        </div>
      </div>

      <Navbar />
      {/* <Voice /> */}
    </main>
  );
}
