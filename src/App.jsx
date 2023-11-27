import Landing from './pages/landing/Landing';
import GlobalStyles from './styles/GlobalStyles';
import './styles/App.css';
import Navigation from './ui/navigation/Navigation';
import { useEffect } from 'react';
import { DesignsProvider } from './context/DesignsContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// REACT QUERY INTEGRATION
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});
function App() {
  // LOAD ALL WEBPAGES ON TOP AUTO
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <DesignsProvider>
        <Navigation />
        <Landing />
      </DesignsProvider>
    </QueryClientProvider>
  );
}

export default App;
