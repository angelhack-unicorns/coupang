import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './pages/Layout';
import HomePage from './pages/Home';
import VoicePage from './pages/Voice';
import TestPage from './pages/Test';

const queryClient = new QueryClient();

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, // The layout component wraps the routes below
      children: [
        {
          path: '/', // The default route ("/")
          element: <HomePage />,
        },
        {
          path: '/voice',
          element: <VoicePage />,
        },
        {
          path: '/test',
          element: <TestPage />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
