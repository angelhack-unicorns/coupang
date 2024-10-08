import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './pages/Layout';
import HomePage from './pages/Home';
import VoicePage from './pages/Voice';
import CameraRecommendationsPage from './pages/CameraRecommendations';
import CameraPage from './pages/CameraPage';

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
          path: '/voice/camera',
          element: <CameraPage/>,
        },
        {
          path: '/voice/camera/recommendations',
          element: <CameraRecommendationsPage />,
        },
        // {
        //   path: '/testrecommendations',
        //   element: <TestRecommendationsPage  data={}/>,
        // },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
