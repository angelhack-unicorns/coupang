import Navbar from '../components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  const isVoicePage = location.pathname === '/voice';

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isVoicePage ? 'bg-white overflow-hidden' : 'bg-white'
      }`}
    >
      <main className='flex-1'>
        <Outlet />
      </main>
      <Navbar />
    </div>
  );
}
