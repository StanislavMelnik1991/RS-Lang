import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { setupStore } from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
  const store = setupStore();

  const persistor = persistStore(store);

  return <ChakraProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  </ChakraProvider>;
}

export default MyApp;
