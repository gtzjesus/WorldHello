import { createContext } from 'react';
import useDesigns from '../features/carousel/useDesigns';

// CREATE CONTEXT API
const DesignsContext = createContext();
function DesignsProvider({ children }) {
  // CUSTOM HOOK TO GRAB designs
  const { designs, isLoading, error } = useDesigns();

  return (
    <DesignsContext.Provider
      value={{
        designs,
        isLoading,
        error,
      }}
    >
      {children}
    </DesignsContext.Provider>
  );
}

export { DesignsContext, DesignsProvider };
