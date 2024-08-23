// global navbar at the bottom

import { useLocation } from 'react-router-dom';
import HomeIcon from './ui/icons/HomeIcon';
import MenuIcon from './ui/icons/MenuIcon';
import SearchIcon from './ui/icons/SearchIcon';
import ShoppingCartIcon from './ui/icons/ShoppingCartIcon';
import UserIcon from './ui/icons/UserIcon';

export default function Navbar() {
  const location = useLocation();
  const isVoicePage = location.pathname === '/voice';

  const navbarClass = `fixed bottom-0 left-0 w-full flex justify-between items-center p-4 ${
    isVoicePage ? 'bg-black' : 'bg-white'
  }`;

  const iconClass = isVoicePage ? 'text-neutral-300' : 'text-black';

  return (
    <footer className={navbarClass}>
      <MenuIcon className={iconClass} />
      <SearchIcon className={iconClass} />
      <HomeIcon className={iconClass} />
      <UserIcon className={iconClass} />
      <ShoppingCartIcon className={iconClass} />
    </footer>
  );
}
