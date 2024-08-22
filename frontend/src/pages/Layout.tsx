import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <header className='header-image flex items-center justify-center mt-4'>
        <img src='header.png' width={101} height={24} />
      </header>
      <main>
        <Outlet />
      </main>
      {/* footer navbar */}
      <Navbar />
    </div>
  );
}
