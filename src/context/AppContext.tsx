import React, { createContext, useContext, useState } from 'react';

interface AppContextInterface {
  // Define your state types here
}

const AppContext = createContext<AppContextInterface | null>(null);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<AppContextInterface>({
    // Initial state values
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
