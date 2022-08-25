import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { setupStore } from '../store/store';
import { Provider } from 'react-redux';
import AppLayout from '../layouts/appLayout'

function MyApp({ Component, pageProps }: AppProps) {

  const store = setupStore()

  return <ChakraProvider>
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  </ChakraProvider>;
}

export default MyApp;
