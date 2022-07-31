import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Header from '../components/Header/Header'
import GlobalStyle from '../globalStyles'
import persistor, { wrapper, store } from '../store/store'

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SessionProvider session={session}>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
        </SessionProvider>
      </PersistGate>
    </Provider>
  )
}

export default wrapper.withRedux(App)
