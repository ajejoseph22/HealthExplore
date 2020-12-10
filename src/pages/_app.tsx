import type { AppProps } from 'next/app'
import { wrapper } from 'store/setup'
import '#/styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
