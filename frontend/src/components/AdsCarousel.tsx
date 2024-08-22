import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ads = [
  { src: 'ads/drink.jpg', alt: 'Ad 1' },
  { src: 'ads/coke.jpg', alt: 'Ad 2' },
  { src: 'ads/mcdonalds.jpg', alt: 'Ad 3' },
];

export default function AdsCarousel() {
  return (
    <div className='w-full'>
      <Carousel
        showArrows={false}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={2500}
        stopOnHover={true}
        showThumbs={false}
        swipeable={true}
        emulateTouch={true}
        ariaLabel='Advertisement carousel'
      >
        {ads.map((ad, index) => (
          <div key={index} className='h-64 w-full'>
            <img
              src={ad.src}
              alt={ad.alt}
              className='h-full w-full object-cover'
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
