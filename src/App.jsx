import Landing from './pages/landing/Landing';
import GlobalStyles from './styles/GlobalStyles';
import './styles/App.css';

import { useEffect } from 'react';
import { DesignsProvider } from './context/DesignsContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navigation from './ui/navigation/Navigation';

// REACT QUERY INTEGRATION
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

// CREATE ROUTER FROM REACT ROUTER DOM (PAGES)
const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
]);

function App() {
  // LOAD ALL WEBPAGES ON TOP AUTO
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <DesignsProvider>
        <RouterProvider router={router} />
        <Navigation />
      </DesignsProvider>
    </QueryClientProvider>
  );
}

export default App;
