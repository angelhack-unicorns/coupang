// global navbar on the bottom

import HomeIcon from '../UI/icons/HomeIcon';
import MenuIcon from '../UI/icons/MenuIcon';
import SearchIcon from '../UI/icons/SearchIcon';
import ShoppingCartIcon from '../UI/icons/ShoppingCartIcon';
import UserIcon from '../UI/icons/UserIcon';

export default function Navbar() {
    return (
        <footer className='fixed bottom-0 left-0 w-full border-t-2 flex justify-between items-center p-4'>
            <img src='header.png' width={101} height={24} />
            <MenuIcon />
            <SearchIcon />
            <HomeIcon />
            <UserIcon />
            <ShoppingCartIcon />
        </footer>
    );
}
