import axios from 'axios';
import { AppInitialProps } from 'next/app';
import { useState, createContext, ReactNode, FunctionComponent } from 'react';

interface UiContextInterface {
  setDarkTheme:Function;
  darkTheme:boolean
}

interface Props {
  children: ReactNode;
}
const UiContext = createContext<UiContextInterface | null>(null);

export const UiProvider:FunctionComponent<Props> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <UiContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiContext;
