import { SessionProvider } from 'next-auth/react'
import Header from '../components/Header/Header'
import GlobalStyle from '../globalStyles'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}
