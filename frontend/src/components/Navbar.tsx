// global navbar at the bottom

import { useLocation } from 'react-router-dom';
import HomeIcon from './ui/icons/HomeIcon';
import MenuIcon from './ui/icons/MenuIcon';
import SearchIcon from './ui/icons/SearchIcon';
import ShoppingCartIcon from './ui/icons/ShoppingCartIcon';
import UserIcon from './ui/icons/UserIcon';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const location = useLocation();
  const isVoicePage = location.pathname === '/voice';

  const navbarClass = `fixed bottom-0 left-0 w-full flex justify-between items-center p-4 ${
    isVoicePage ? 'bg-white' : 'bg-white'
  }`;

  const iconClass = isVoicePage ? 'text-black' : 'text-black';

  return (
    <footer className={navbarClass}>
      <MenuIcon className={iconClass} />
      <SearchIcon className={iconClass} />
      <HomeIcon
        className={iconClass}
        onClick={() => {
          navigate('/');
        }}
      />
      <UserIcon className={iconClass} />
      <ShoppingCartIcon className={iconClass} />
    </footer>
  );
}
