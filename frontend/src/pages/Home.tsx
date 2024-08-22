import { SearchField } from '../components/ui/search-field';

export default function HomePage() {
  return (
    <main className='grid gap-y-2'>
      <SearchField
        aria-label='Search'
        placeholder='구팡에서 검색하세요!'
        className='mx-4'
      />
    </main>
  );
}
