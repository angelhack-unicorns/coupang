import CartItem from './CartItem'

export default function CartContainer() {
    const items = [0, 1, 2, 3, 4, 5];

    return (
        <>
            <div className="h-96 overflow-auto space-y-2">
                {items.map((item, i) => (
                    <CartItem />
                ))}
            </div>
        </>
    )
}