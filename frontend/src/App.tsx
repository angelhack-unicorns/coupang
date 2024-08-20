import Navbar from './components/Navbar';
import { SearchField } from './components/ui/search-field';

export default function App() {
  return (
    <main className='grid gap-y-2'>
      <header className='header-image flex items-center justify-center mt-4'>
        <img src='header.png' width={101} height={24} />
      </header>
      <SearchField aria-label='Search' placeholder='구팡에서 검색하세요!' className='mx-4'/>
      <div className='text-3xl font-bold text-center bg-red-500'>
        Hello World
      </div>
      <Navbar />
    </main>
  );
}
