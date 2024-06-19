import type { AppProps } from "next/app";

//message de notif
import { Flip, ToastContainer} from 'react-toastify';

//css
import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* parametre du pop up qui notifie sur toute la page les inscription et connexion */}
      <ToastContainer
          position="top-center"
          autoClose={8000}
          transition={Flip}
      />
      <Component {...pageProps} />;
    </>
  ) 
  
}
