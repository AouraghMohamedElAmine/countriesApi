import "../styles/globals.css";
import '../styles/dropdown.css'
import store from "../redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme='dark'>
      <Head>
        <title>What's the world</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="../public/%PUBLIC_URL%/favicon.ico?v=2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        

        
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
    </Provider>
    
  );
}

export default MyApp;
