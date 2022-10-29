import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { UiProvider } from '../context/UiContext';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <UiProvider>
          <Component {...pageProps} />
        </UiProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
