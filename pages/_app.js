//Tailwind
import "tailwindcss/tailwind.css";

//Redux
import { Provider } from 'react-redux';
import store from '../redux/store';

//Components
import NavBar from '../components/navigation/NavBar';
import Footer from '../components/navigation/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <main className={`bg-gray-50`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </Provider>
  )
}

export default MyApp
