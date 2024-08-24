import CartItem from './CartItem'
import BackButton from './ui/icons/BackButton'
import CameraIcon from './ui/icons/CameraIcon'

export default function CartContainer() {

    const dataArr = [{ im: null, name: '이즈휴 리모콘 간접 무드등 히든 줄조명 M4, 웜화이트', discountPerc: '13%', origPrice: "45,750원", newPrice: '39,000원', delivBy: '내일(월) 도착 보장' }, { name: '이즈휴 리모콘 간접 무드등 히든 줄조명 M4, 웜화이트', discountPerc: '13%', origPrice: "45,750원", newPrice: '39,000원', delivBy: '내일(월) 도착 보장' }, { name: '이즈휴 리모콘 간접 무드등 히든 줄조명 M4, 웜화이트', discountPerc: '13%', origPrice: "45,750원", newPrice: '39,000원', delivBy: '내일(월) 도착 보장' }]

    return (
        <>
            <div className='flex mt-4 mb-2 w-full px-2 text-black justify-between'>
                <BackButton className='mr-auto ml-2' />
                <CameraIcon className='mr-2 ml-auto' stroke="black" />
            </div>
            <div className="h-96 overflow-auto space-y-2">
                {dataArr.map((item, i) => (
                    <CartItem {...item} />
                ))}
            </div>
        </>
    )
}