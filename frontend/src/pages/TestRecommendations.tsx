import { useSubmitUserMessage } from '../api/fetch-scraper-data';
import { useState } from 'react';
import { Card } from '../components/ui/card';

interface CoupangInfo {
  product_url: string;
  src: string;
  name: string;
  price: string;
}

interface Item {
  name: string;
  category: string;
  reason_for_inclusion: string;
  coupang_info: CoupangInfo[];
}

export default function TestRecommendationsPage() {
  const [userMessage, setUserMessage] = useState('');
  const [response, setResponse] = useState<Item[]>([]);
  const submitMessage = useSubmitUserMessage();

  const handleSubmit = async () => {
    try {
      const result = await submitMessage.mutateAsync(userMessage);
      setResponse(result.items);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='p-4'>
      <input
        type='text'
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        placeholder='Enter your message'
        className='w-full p-2 border rounded mb-4'
      />
      <button
        onClick={handleSubmit}
        disabled={submitMessage.isPending}
        className='bg-blue-500 text-white p-2 rounded'
      >
        Submit
      </button>
      {submitMessage.isPending && <p>Submitting...</p>}
      <div className='mt-4 space-y-6'>
        {response.map((item, index) => (
          <Card key={index} className='p-4'>
            <Card.Header>
              <Card.Title>{item.name}</Card.Title>
              <Card.Description>Category: {item.category}</Card.Description>
            </Card.Header>
            <Card.Content>
              <p className='mb-4'>{item.reason_for_inclusion}</p>
              <h4 className='font-semibold mb-2'>Coupang Products:</h4>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {item.coupang_info.map((product, productIndex) => (
                  <a
                    key={productIndex}
                    href={product.product_url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block border rounded p-2 hover:shadow-md transition-shadow'
                  >
                    <img
                      src={product.src}
                      alt={product.name}
                      className='w-full h-32 object-cover mb-2'
                    />
                    <p className='text-sm font-medium truncate'>
                      {product.name}
                    </p>
                    <p className='text-sm text-blue-600'>{product.price}</p>
                  </a>
                ))}
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
    </div>
  );
}
