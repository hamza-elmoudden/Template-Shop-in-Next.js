import '@/styles/globals.css';
import Main_Lyout from "@/Components/Main_Lyout";
import { SessionProvider } from "next-auth/react"
import {store} from '../Toolkit/store';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
    <SessionProvider session={pageProps.session}>
    <Main_Lyout>
    <Component {...pageProps} />
    </Main_Lyout>
    </SessionProvider>
    </Provider>
    )

}
