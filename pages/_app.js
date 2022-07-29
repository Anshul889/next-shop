import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import Header from '../components/Header/Header'
import GlobalStyle from '../globalStyles'

function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  )
}

export default wrapper.withRedux(MyApp);
