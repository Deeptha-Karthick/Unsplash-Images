import Gallary from "./components/Gallary";
import ThemeToggle from "./components/ThemeToggle";
import SearchForm from "./components/SearchForm";
import { SearchTextContextProvider } from "./context/SearchWord";
import { ThemeContextProvider } from "./context/ThemeContext";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeContextProvider>
          <ThemeToggle />
          <SearchTextContextProvider>
            <SearchForm />
            <Gallary />
          </SearchTextContextProvider>
        </ThemeContextProvider>
      </QueryClientProvider>
    </>
  );
};
export default App;
