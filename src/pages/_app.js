import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
import  store  from "../stores/index"
// import { SSRProvider, ThemeProvider } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { Toaster } from "react-hot-toast";
import { createWrapper } from 'next-redux-wrapper';


function MyApp({ Component, pageProps }) {

  return (
        <Provider store={store} >
          <Component {...pageProps} />
        </Provider>

  )
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore, { debug: false });
export default wrapper.withRedux(MyApp)
