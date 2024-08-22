import { SearchField } from '../components/ui/search-field';
import AdsCarousel from '../components/AdsCarousel';

export default function HomePage() {
  return (
    <main className='grid gap-y-4'>
      <SearchField
        aria-label='Search'
        placeholder='구팡에서 검색하세요!'
        className='mx-4'
      />
      <AdsCarousel />
    </main>
  );
}
