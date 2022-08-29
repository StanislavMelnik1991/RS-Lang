import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
  const store = setupStore();

  return <ChakraProvider>
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  </ChakraProvider>;
}

export default MyApp;
