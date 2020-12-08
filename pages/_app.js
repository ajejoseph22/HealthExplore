// import '../styles/globals.css'
import "tailwindcss/tailwind.css";

import { Provider } from 'react-redux'
import { useStore } from '../store'

// let store = createStore(projectReducer);


function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  // function getInitialProps({Component, ctx}) {
  //   const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  //   //Anything returned here can be access by the client
  //   return {pageProps: pageProps};
  // }
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
