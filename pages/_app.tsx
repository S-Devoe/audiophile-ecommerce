import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../layout/Layout'
import { AnimatePresence } from 'framer-motion'
import { Provider } from 'react-redux'
import store from '../store/store'
import { useEffect, useState } from 'react'
import ModalContextProvider from '../store/ModalContextProvider'

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
 
    return (
      <AnimatePresence exitBeforeEnter>
        <Provider store={store}>
          <ModalContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ModalContextProvider>
        </Provider>
      </AnimatePresence>
    );
  }
  
}

export default MyApp
