import '../styles/globals.css'
import { QueryClientProvider, QueryClient } from "react-query";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { Oswald } from "next/font/google";

const queryClient = new QueryClient();

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={oswald.className}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </div>
    </QueryClientProvider>
  );
}

export default MyApp
