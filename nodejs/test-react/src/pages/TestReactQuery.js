import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { randomHsl } from "../utils/randomColor";

const queryClient = new QueryClient();

function TestReactQuery() {
  return (
    <div style={{ backgroundColor: randomHsl() }}>
      TestQuery
      <div>
        <QueryClientProvider client={queryClient}>
          <div>abc</div>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default TestReactQuery;
