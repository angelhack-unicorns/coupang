import { PlusIcon } from "./ui/icons/PlusIcon";
import { StarIcon } from "./ui/icons/StarIcon";

export default function CartItem({ im, name, discountPerc, origPrice, newPrice, delivBy }) {
    const rating = 5;
    const ratingArr = Array.apply(null, Array(rating)).map(function () { });

    // const dataArr = [{ im: null, name: '이즈휴 리모콘 간접 무드등 히든 줄조명 M4, 웜화이트', discountPerc: '13%', origPrice: "45,750원", newPrice: '39,000원', delivBy: '내일(월) 도착 보장' }, { name: '이즈휴 리모콘 간접 무드등 히든 줄조명 M4, 웜화이트', discountPerc: '13%', origPrice: "45,750원", newPrice: '39,000원', delivBy: '내일(월) 도착 보장' }, { name: '이즈휴 리모콘 간접 무드등 히든 줄조명 M4, 웜화이트', discountPerc: '13%', origPrice: "45,750원", newPrice: '39,000원', delivBy: '내일(월) 도착 보장' }]
    return (
        <div className="flex gap-10 bg-green-200">

            <div className="w-full h-[13em] bg-red-200 flex p-5">
                <div className="w-[10em] aspect-square bg-blue-500 p-1"></div>
                <div className="flex flex-col px-5">
                    <div className="max-w-[80%]">
                        <p>{name}</p>
                    </div>
                    <p>{discountPerc}<span className="line-through">{origPrice}</span></p>
                    <p>{newPrice}</p>
                    <p>{delivBy}</p>
                    <div className="flex">
                        {ratingArr.map((_,) => (
                            <span className="text-black"><StarIcon /></span>
                        ))}
                    </div>
                </div>
                <button>
                    <div className="flex items-center bg-[#3369FD] rounded-full p-2 h-7 w-7 justify-center my-auto">
                        <PlusIcon />
                    </div>
                </button>
            </div>

        </div >
    )
}