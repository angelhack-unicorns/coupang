import { useSubmitUserMessage } from '../api/fetch-categories';
import { useState } from 'react';

interface Item {
  name: string;
  category: string;
  reason_for_inclusion: string;
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
      <div className='mt-4'>
        {response.map((item, index) => (
          <div key={index} className='mb-4 p-4 border rounded'>
            <h3 className='font-bold'>{item.name}</h3>
            <p>Category: {item.category}</p>
            <p>{item.reason_for_inclusion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
