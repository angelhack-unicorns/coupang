import CartItem from './CartItem';
import BackButton from './ui/icons/BackButton';
import CameraIcon from './ui/icons/CameraIcon';

export default function CartContainer() {
    //   const dataArr = [
    //     {
    //       im: null,
    //       name: '이즈휴 리모콘 간접 무드등 히든 줄조명 M4, 웜화이트',
    //       discountPerc: '13%',
    //       origPrice: '45,750원',
    //       newPrice: '39,000원',
    //       delivBy: '내일(월) 도착 보장',
    //     },
    //     {
    //       name: '이즈휴 리모콘 간접 무드등 히든 줄조명 M4, 웜화이트',
    //       discountPerc: '13%',
    //       origPrice: '45,750원',
    //       newPrice: '39,000원',
    //       delivBy: '내일(월) 도착 보장',
    //     },
    //     {
    //       name: '이즈휴 리모콘 간접 무드등 히든 줄조명 M4, 웜화이트',
    //       discountPerc: '13%',
    //       origPrice: '45,750원',
    //       newPrice: '39,000원',
    //       delivBy: '내일(월) 도착 보장',
    //     },
    //   ];

    let text = "\ucf54\uba67 \uc2a4\ud3ec\uce20 \ub77c\ud14d\uc2a4 \ub8e8\ud504\ubc34\ub4dc 5\uc885 \uc138\ud2b8, \ud551\ud06c, \uc624\ub80c\uc9c0, \ud53c\uce58, \ub85c\uc988, \ud37c\ud50c, 1\uc138\ud2b8"
    console.log(unicodeToChar(text));

    const dataArr = [
        { im: null, name: "이즈휴 리모콘 간접 무드등 히든 줄조명 M4", discountPerc: '13%', origPrice: "45,750원", newPrice: '39,000원', delivBy: '내일(월) 도착 보장' }, { name: '이즈휴 리모콘 간접 무드등 히든 줄조명 M4, 웜화이트', discountPerc: '13%', origPrice: "45,750원", newPrice: '39,000원', delivBy: '내일(월) 도착 보장' },
        { name: '이즈휴 리모콘 간접 무드등 히든 줄조명 M4, 웜화이트', discountPerc: '13%', origPrice: "45,750원", newPrice: '39,000원', delivBy: '내일(월) 도착 보장' }
    ]

    return (
        <>
            <div className='flex mt-0 mb-2 w-full px-2 text-black justify-between'>
                <BackButton className='mr-auto ml-2' />
                <CameraIcon className='mr-2 ml-auto' stroke="black" />
            </div>
            <hr className="my-0 h-0.5 border-t-0 bg-neutral-300 dark:bg-white/10" />
            <div className="h-96 overflow-auto space-y-2">
                {dataArr.map((item, i) => (
                    <>
                        <CartItem {...item} />
                        <hr className="my-12 h-0.5 border-t-0 bg-neutral-200 dark:bg-white/10" />
                    </>
                ))}
            </div>
            <hr className="my-0 h-0.5 border-t-0 bg-neutral-300 dark:bg-white/10" />
        </>
    )
}




const dummy = {
    "items": [{
        "name": "adjustable dumbbells",
        "category": "Weights",
        "reason_for_inclusion": "Adjustable dumbbells are important because they allow for a wide range of exercises that target various muscle groups, helping to build strength and size effectively.",
        "coupang_info": [{
            "product_url": "https://www.coupang.com/vp/products/4316330900?itemId=5016445218&vendorItemId=72326309370",
            "src": "thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/0820_amir_esrgan_inf80k_batch_3_max3k/3604/8939d4e29b9a3e7b8d41b7fd45664cb81c8337960ad9ec1efc58587844e3.jpg",
            "name": "\ud50c\ub7ec\uadf8\ud53c\ud2b8\ub2c8\uc2a4 \ub2e4\uc774\uc5bc \ubb34\uac8c\uc870\uc808 \ub364\ubca8 24kg, 1\uac1c, \ud63c\ud569\uc0c9\uc0c1",
            "price": "87,500"
        }, {
            "product_url": "https://www.coupang.com/vp/products/7578389096?itemId=20000421916&vendorItemId=87097553941&pickType=COU_PICK",
            "src": "thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/621380092636309-b9276940-c0d6-4ec2-aba5-b34ab7527e16.jpg",
            "name": "\ucf54\uba67 \uc2a4\ud3ec\uce20 \uace0\uc911\ub7c9 \uc721\uac01 \ub364\ubca8 \uc544\ub839 \ube14\ub799, 10kg, 2\uac1c",
            "price": "20,490"
        }, {
            "product_url": "https://www.coupang.com/vp/products/7487750539?itemId=19573686112&vendorItemId=86681418295",
            "src": "thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2023/07/25/11/7/40ad0702-1eb6-465d-a43b-ebc1c2dff49a.jpg",
            "name": "\uc544\ub9ac\ud504 PEV \ud5e5\uc0ac\uace4 \ub364\ubca8, 5kg, 2\uac1c",
            "price": "31,000"
        }, {
            "product_url": "https://www.coupang.com/vp/products/7578389096?itemId=20000421913&vendorItemId=87097553922",
            "src": "thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/0820_amir_esrgan_inf80k_batch_1_max3k/a7d9/ffd6026fc3627d918bb9d8fc4d550496767d20a55d4d39f52cfe9fe4cb87.jpg",
            "name": "\ucf54\uba67 \uc2a4\ud3ec\uce20 \uace0\uc911\ub7c9 \uc721\uac01 \ub364\ubca8 \uc544\ub839 \ube14\ub799, 6kg, 2\uac1c",
            "price": "13,090"
        }, {
            "product_url": "https://www.coupang.com/vp/products/8019566391?itemId=22407604010&vendorItemId=89452468360",
            "src": "thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/82803758700456-28a6d495-0fe9-472d-89b9-fa1846e661d4.jpg",
            "name": "\ub9ac\ube0c\uc2a4\ud3ec \uc2a4\ud3ec\uce20 \ud5ec\uc2a4\uc6a9 \uc544\ub839 \ub364\ubca8, 2kg, 2\uac1c",
            "price": "11,900"
        }, {
            "product_url": "https://www.coupang.com/vp/products/8019566391?itemId=22407604008&vendorItemId=89452468345",
            "src": "img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
            "name": "\ub9ac\ube0c\uc2a4\ud3ec \uc2a4\ud3ec\uce20 \ud5ec\uc2a4\uc6a9 \uc544\ub839 \ub364\ubca8, 1kg, 2\uac1c",
            "price": "6,690"
        }, {
            "product_url": "https://www.coupang.com/vp/products/8068053169?itemId=22698637876&vendorItemId=86352875262",
            "src": "img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
            "name": "\ube14\ub8e8\uc120 \uc544\ub839 \ub364\ubca8 \uc6b4\ub3d9 \ubc14\ubca8 \uc138\ud2b8, 1\uac1c, \ube14\ub799, 20kg",
            "price": "23,830"
        }, {
            "product_url": "https://www.coupang.com/vp/products/7578389096?itemId=20000421912&vendorItemId=87097553906",
            "src": "img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
            "name": "\ucf54\uba67 \uc2a4\ud3ec\uce20 \uace0\uc911\ub7c9 \uc721\uac01 \ub364\ubca8 \uc544\ub839 \ube14\ub799, 8kg, 2\uac1c",
            "price": "17,090"
        }, {
            "product_url": "https://www.coupang.com/vp/products/7730868823?itemId=20773566990&vendorItemId=87843473938",
            "src": "img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
            "name": "\ud53c\ud2f0\uc998 \ubb34\uac8c\uc870\uc808 \ub364\ubca8 \ubc14\ubca8 28kg \uc138\ud2b8, 1\uac1c",
            "price": "32,900"
        }, {
            "product_url": "https://www.coupang.com/vp/products/8187336463?itemId=23416186227&vendorItemId=90443235902",
            "src": "img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
            "name": "\ud54f\uc5d0\uc774\ube14 \ud53d\uc2a4 \ubb34\uac8c\uc870\uc808 \ub364\ubca8 \ubc14\ubca8 2in1 \uc138\ud2b8, 1\uac1c, 20kg",
            "price": "39,900"
        }]
    }, {
        "name": "resistance bands",
        "category": "Accessories",
        "reason_for_inclusion": "Resistance bands are essential for adding variety to workouts and can be used for strength training, flexibility exercises, and rehabilitation, making them a versatile tool for any gym.",
        "coupang_info": [{
            "product_url": "https://www.coupang.com/vp/products/306146810?itemId=965291522&vendorItemId=5369727509&pickType=COU_PICK",
            "src": "thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/81322582335602-ea0115fb-2dc4-47bc-86a1-a9378cc7dbf6.jpg",
            "name": "\ucf54\uba67 \uc2a4\ud3ec\uce20 \ub77c\ud14d\uc2a4 \ub8e8\ud504\ubc34\ub4dc 5\uc885 \uc138\ud2b8, \uadf8\ub9b0, \ube14\ub8e8, \uc610\ub85c\uc6b0, \ub808\ub4dc, \ube14\ub799",
            "price": "7,000"
        }, {
            "product_url": "https://www.coupang.com/vp/products/5848734515?itemId=10171776690&vendorItemId=80769485185",
            "src": "thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/rs_quotation_api/234qpavx/72646377e0b24a359a538041b24e058b.jpg",
            "name": "\ub81b\uce20\ud54f \ub77c\ud14d\uc2a4 \ub8e8\ud504\ubc34\ub4dc 5\uc885 \uc138\ud2b8, \ubbf9\uc2a4\uce7c\ub77c, 1\uac1c",
            "price": "6,280"
        }, {
            "product_url": "https://www.coupang.com/vp/products/7774429607?itemId=20997380270&vendorItemId=90728064784",
            "src": "thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/3a17/884bb7cb73d520d4b885068793745d52eb2bdb0d88b040c405e8932ca2f9.jpg",
            "name": "\ud14c\uc774\ud0a4 \ud5ec\uc2a4 \ud29c\ube59 \ubc34\ub4dc \uc138\ub77c \uc2a4\ud3ec\uce20 \uba40\ud2f0 \uadfc\ub825 \uc6b4\ub3d9, 1\uac1c",
            "price": "10,910"
        }, {
            "product_url": "https://www.coupang.com/vp/products/7107508965?itemId=17758266503&vendorItemId=87638245525",
            "src": "thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/cf17/8ae7a1565475ecca05daeaca2fe705a933948879e8321445071e800139ed.jpg",
            "name": "\uc544\uc774\uc5b8\ube45 \uc2a4\ucffc\ud2b8 \ud799\uc5c5 \uc0ac\ub808\ub808 \ubcf4\uc870 \uc6b4\ub3d9 \ub8e8\ud504\ubc34\ub4dc 5\uc885 \uc138\ud2b8, \ud63c\ud569\uc0c9\uc0c1",
            "price": "15,700"
        }, {
            "product_url": "https://www.coupang.com/vp/products/7563553945?itemId=19931749947&vendorItemId=3653382808",
            "src": "thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3120462499013334-28f5031f-bd7a-4541-9fd9-3154c391e25e.jpg",
            "name": "\uc138\ub77c\ubc34\ub4dc 2M \uc624\ub9ac\uc9c0\ub110 \ubc34\ub4dc \ub2e8\uacc4\ubcc4 \ud0c4\uc131\uc800\ud56d \ubc34\ub4dc +\uc6b4\ub3d9\ub9e4\ub274\uc5bc, \ub808\ub4dc(2\ub2e8\uacc4), 1\uac1c",
            "price": "10,800"
        }, {
            "product_url": "https://www.coupang.com/vp/products/7773764309?itemId=20994087065&vendorItemId=88058429979",
            "src": "img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
            "name": "\ucf54\uba67 \uc2a4\ud3ec\uce20 \ub77c\ud14d\uc2a4 \ub8e8\ud504\ubc34\ub4dc 5\uc885 \uc138\ud2b8, \ud551\ud06c, \uc624\ub80c\uc9c0, \ud53c\uce58, \ub85c\uc988, \ud37c\ud50c, 1\uc138\ud2b8",
            "price": "6,250"
        }, {
            "product_url": "https://www.coupang.com/vp/products/7865771889?itemId=21474896428&vendorItemId=90567237319",
            "src": "img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
            "name": "\ud648\ud2b8\uc778 \uba40\ud2f0 \ud29c\ube59\ubc34\ub4dc \uc138\ud2b8 \ud648\ud2b8\ub808\uc774\ub2dd\uae30\uad6c \uadfc\ub825 \uc6b4\ub3d9 \uace0\ubb34 \ubc34\ub4dc, 1\uac1c",
            "price": "13,900"
        }, {
            "product_url": "https://www.coupang.com/vp/products/7944578145?itemId=21899830555&vendorItemId=88947866448",
            "src": "img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
            "name": "\ub9ac\ube0c\uc2a4\ud3ec \uc2a4\ud3ec\uce20 \ub77c\ud14d\uc2a4 \ub8e8\ud504\ubc34\ub4dc 5\uc885 + \ud30c\uc6b0\uce58, \uadf8\ub9b0, \ube14\ub8e8, \uc5d8\ub85c\uc6b0, \ub808\ub4dc, \ube14\ub799, 1\uc138\ud2b8",
            "price": "5,790"
        }, {
            "product_url": "https://www.coupang.com/vp/products/8157557159?itemId=23243338925&vendorItemId=90840952472",
            "src": "img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
            "name": "Hollowfly 12 Pcs Latex Resistance Bands for Working Out Booty Workout Stretch Exercise Non Slip Legs, \ubbf8\ub514\uc5c4, \ub77c\uc774\ud2b8 \ube14\ub8e8",
            "price": "42,500"
        }, {
            "product_url": "https://www.coupang.com/vp/products/8168143593?itemId=23316172420&vendorItemId=90965148457",
            "src": "img1a.coupangcdn.com/image/coupang/search/blank1x1.gif",
            "name": "\ud14c\ub77c\ubc34\ub4dc \ud50c\ub809\uc2a4\ubc14 \uc138\ub77c\ubc34\ub4dc \uadfc\uc721\uc774\uc644 \ud648\ud2b8 \uc5d8\ubcf4\uc6b0 \ud14c\ub2c8\uc2a4 \uc190\ubaa9 THERABAND Professional Latex Resistance Bands Individual 6 Ft El, Red \u2013 Medium, Individual Bands",
            "price": "37,900"
        }]
    }]
}
