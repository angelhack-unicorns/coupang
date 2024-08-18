// global navbar on the bottom

import HomeIcon from '../UI/icons/HomeIcon';
import UserIcon from '../UI/icons/UserIcon';

export default function Navbar() {
  return (
    <footer className='fixed bottom-0 left-0 w-full border-t-2 flex justify-center items-center py-4'>
      <HomeIcon />
      <UserIcon />
      {/* add other icons */}
    </footer>
  );
}
