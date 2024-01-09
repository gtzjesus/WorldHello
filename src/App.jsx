import Landing from './pages/landing/Landing';
import GlobalStyles from './styles/GlobalStyles';
import './styles/App.css';
import { useEffect, useState } from 'react';
import { DesignsProvider } from './context/DesignsContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navigation from './ui/navigation/Navigation';
import NavigationWBackground from './ui/navigation/NavigationWBackground';
import Contact from './pages/contact/Contact';

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
  {
    path: '/contact',
    element: <Contact />,
  },
]);

function App() {
  // GRAB STATE for navigation scroll
  const [header, setHeader] = useState(false);
  // FUNCTION TO change state on scroll
  const changeHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  // CHECK for scroll with event listener
  window.addEventListener('scroll', changeHeader);

  // LOAD ALL WEBPAGES ON TOP AUTO
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <DesignsProvider>
        <RouterProvider router={router} />
        {!header ? <Navigation /> : <NavigationWBackground />}
      </DesignsProvider>
    </QueryClientProvider>
  );
}

export default App;
