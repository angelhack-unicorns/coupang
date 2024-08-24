import Navbar from '../components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import { SearchField } from '../components/ui/search-field';
import { Button } from '../components/ui';
import MicrophoneIcon from '../components/ui/icons/MicrophoneIcon';
import { useNavigate } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  const isVoicePage = location.pathname === '/voice';
  const navigate = useNavigate();

  return (
    <div
      className={`min-h-screen flex flex-col ${isVoicePage ? 'bg-black overflow-hidden' : 'bg-white'
        }`}
    >
      <header className='sticky top-0 z-10 bg-white header-image flex flex-col items-center justify-center px-4'>
        <img src='header.png' width={101} height={24} alt='Header' className="m-2" />
        <div className='flex-shrink-0 mb-2  w-full' >
          <span className='flex gap-x-2 w-full'>
            <SearchField
              aria-label='Search'
              placeholder='구팡에서 검색하세요!'
              className='w-full'
            />
            <Button
              intent='secondary'
              onPress={() => {
                navigate('/voice');
              }}
            >
              <MicrophoneIcon />
            </Button>
          </span>
        </div>
      </header>
      <main
        className={`flex-1 overflow-hidden ${isVoicePage ? 'text-white' : ''}`}
      >
        <Outlet />
      </main>
      <Navbar />
    </div>
  );
}
