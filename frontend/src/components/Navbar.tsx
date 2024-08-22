// global navbar on the bottom

import HomeIcon from './ui/icons/HomeIcon';
import MenuIcon from './ui/icons/MenuIcon';
import SearchIcon from './ui/icons/SearchIcon';
import ShoppingCartIcon from './ui/icons/ShoppingCartIcon';
import UserIcon from './ui/icons/UserIcon';

export default function Navbar() {
  return (
    <footer className='fixed bottom-0 left-0 w-full border-t-2 flex justify-between items-center p-4'>
      <MenuIcon />
      <SearchIcon />
      <HomeIcon />
      <UserIcon />
      <ShoppingCartIcon />
    </footer>
  );
}
