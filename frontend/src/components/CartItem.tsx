import { StarIcon } from './ui/icons/StarIcon';

export default function CartItem({
  src,
  product_url,
  name,
  price,
}: {
  src: string;
  product_url: string;
  name: string;
  price: string;
}) {
  const rating = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
  const ratingArr = Array.apply(null, Array(rating)).map(function () {});

  return (
    <div className='flex gap-10 '>
      <div className='w-full h-[13em] flex p-5'>
        <img src={`https://${src}`}></img>
        <div className='flex flex-col px-5'>
          <div className='max-w-[100%]'>
            <a
              href={product_url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-black hover:underline'
            >
              <p className='text-black'>{unicodeToChar(name)}</p>
            </a>
          </div>

          <p className='text-coupang_discount text-base'>{price}</p>
          {Math.random() > 0.5 && (
            <p className='text-coupang_green'>내일(월) 도착 보장</p>
          )}

          <div className='flex'>
            {ratingArr.map((_) => (
              <span className='text-coupang_star'>
                <StarIcon />
              </span>
            ))}
          </div>
        </div>
        <button>
          {/* <div className="flex items-center bg-[#3369FD] rounded-full p-2 h-7 w-7 justify-center my-auto">
                        <PlusIcon />
                    </div> */}
        </button>
      </div>
    </div>
  );
}

function unicodeToChar(text: string) {
  return text.replace(/\\u[\dA-F]{4}/gi, function (match) {
    return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
  });
}
