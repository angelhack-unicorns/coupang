import { PlusIcon } from "./ui/icons/PlusIcon";
import { StarIcon } from "./ui/icons/StarIcon";

export default function CartItem({ im, name, discountPerc, origPrice, newPrice, delivBy }) {
    const rating = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
    const ratingArr = Array.apply(null, Array(rating)).map(function () { });

    // let deliveryOptions = "내일(월) 도착 보장"

    return (
        <div className="flex gap-10 ">
            <div className="w-full h-[13em] flex p-5">
                <img src='https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3120462499013334-28f5031f-bd7a-4541-9fd9-3154c391e25e.jpg'></img>
                <div className="flex flex-col px-5">
                    <div className="max-w-[100%]">
                        <p className="text-black">{name}</p>
                    </div>

                    <p className="text-coupang_discount text-base">{newPrice}</p>
                    {Math.random() > 0.5 && <p className="text-coupang_green" >내일(월) 도착 보장</p>}

                    <div className="flex">
                        {ratingArr.map((_,) => (
                            <span className="text-coupang_star"><StarIcon /></span>
                        ))}
                    </div>
                </div>
                <button>
                    {/* <div className="flex items-center bg-[#3369FD] rounded-full p-2 h-7 w-7 justify-center my-auto">
                        <PlusIcon />
                    </div> */}
                </button>
            </div>

        </div >
    )
}