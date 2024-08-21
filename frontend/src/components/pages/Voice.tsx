import HomeIcon from '../../UI/icons/HomeIcon';
import SearchIcon from '../../UI/icons/SearchIcon';
import ShoppingCartIcon from '../../UI/icons/ShoppingCartIcon';
import { useEffect, useState } from 'react';
import VoiceCart from '../VoiceCart';

export default function Voice() {

    const [rad, setRad] = useState<string>('80');

    //change to true for cart
    const [isCart, seICart] = useState<boolean>(false);

    //update radius based on voice amplitude in the future
    useEffect(() => {
        setTimeout(() => {
            if (rad === '80') {
                setRad('50');
            }
            else {
                setRad('80');
            }
        }, 1000)
    }, [rad])
    return (

        <main className='grid grid-cols-3 grid-rows-12 header-image h-screen'>

            <div className="col-start-2 flex items-center justify-center">
                <img src='header.png' width={101} height={24} />
            </div>
            <div className="flex gap-2 items-center justify-center">
                <ShoppingCartIcon />
                <HomeIcon />
                <SearchIcon />
            </div>

            <div className="flex col-span-full row-span-6 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 justify-center overflow-auto">
                {!isCart ? <div className={`flex bg-white rounded-full aspect-square w-[${rad}%] m-auto`} >
                </div> : <VoiceCart />}
            </div>
            <div className="flex col-span-full row-span-3 items-center justify-center">
                <p> No Problem! Please provide me a picture.</p>
            </div>
            <div className="flex col-span-full row-span-2 items-center justify-center">
                <div className="flex justify-between w-[80%]">
                    <button className="active:opacity-50">
                        <img src='xBg.png' className="" />
                    </button>
                    <div className="flex text-center items-center justify-center">
                        <p>Listening...</p>
                    </div>
                    <button className="active:opacity-50">
                        <img src='cameraBg.png' className="" />
                    </button>
                </div>
            </div>
        </main>

    );
}
