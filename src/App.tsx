import { RouterProvider } from 'react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from '@/router';
import { FirebaseProvider } from './context/firebase';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      cacheTime: 0,
    },
  },
});

export default function App() {
  return (
    <FirebaseProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </FirebaseProvider>
  );
}
