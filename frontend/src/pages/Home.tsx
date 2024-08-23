import { SearchField } from '../components/ui/search-field';
import AdsCarousel from '../components/AdsCarousel';
import HandbagIcon from '../components/ui/icons/HandbagIcon';
import { Button } from '../components/ui';
import MicrophoneIcon from '../components/ui/icons/MicrophoneIcon';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main className='grid gap-y-2'>
      {/* search and microphone inputs */}
      <span className='flex mx-4 gap-x-2'>
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
      {/* scrollable content */}
      <div className='overflow-y-auto' style={{ maxHeight: '80vh' }}>
        <AdsCarousel />

        {/* quicklinks section (placeholder) */}
        <div className='border-4 h-48 my-4'></div>

        {/* 70% off ad image */}
        <img
          src='ads/70.jpg'
          width={101}
          height={24}
          className='w-full h-24' // Fixed height for image
        />

        {/* products recommendations */}
        <section className='flex items-center gap-x-4 m-4'>
          <HandbagIcon />
          <span className='text-xl font-bold'>이 상품 놓치지 마세요!</span>
          <span className='text-xl text-blue-500 ml-auto'>더보기 &gt;</span>
        </section>
      </div>
    </main>
  );
}
