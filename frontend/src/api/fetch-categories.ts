import { useMutation } from '@tanstack/react-query';

interface UserMessageResponse {
  items: Item[];
}

interface Item {
  name: string;
  category: string;
  reason_for_inclusion: string;
}

export const useSubmitUserMessage = () => {
  return useMutation<UserMessageResponse, Error, string>({
    mutationFn: async (userMessage: string) => {
      const response = await fetch(
        'http://localhost:8000/api/e9dyi1qp04w57b5q98hwmwx8/user-message',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_message: userMessage }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to submit user message');
      }

      return response.json();
    },
  });
};

// example output:
// export const categories = {
//   items: [
//     {
//       name: 'Dumbbells',
//       category: 'Strength Training',
//       reason_for_inclusion:
//         'Dumbbells are versatile and can be used to train multiple parts of the body including arms, shoulders, and chest, making you look bigger and stronger.',
//     },
//     {
//       name: 'Barbell with Weights',
//       category: 'Strength Training',
//       reason_for_inclusion:
//         'Barbells are essential for compound exercises like squats, deadlifts, and bench presses, which work on major muscle groups and enhance overall strength.',
//     },
//   ],
// };

// originally in items name: 'Barbell with Weights'.
// we need to lowercase and change spaces with +
// q = 'barbell+with+weights'
