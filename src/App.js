import * as React from 'react';
import Weather from './components/Weather';
import { QueryClient, QueryClientProvider } from "react-query";
import "./style.css"
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Weather />
    </QueryClientProvider>
  );
}
