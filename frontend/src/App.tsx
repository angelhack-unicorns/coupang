import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/Home';
import VoicePage from './pages/Voice';

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
