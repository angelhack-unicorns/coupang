import Navbar from '../components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
export default function Layout() {
  const location = useLocation();
  const isVoicePage = location.pathname === '/voice';

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isVoicePage ? 'bg-black overflow-hidden' : 'bg-white'
      }`}
    >
      <header className='header-image flex items-center justify-center m-2'>
        <img src='header.png' width={101} height={24} alt='Header' />
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
