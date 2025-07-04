import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import LoadingPage from "./state/LoadingPage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";


const NotFoundPage =lazy(()=> import( "./pages/NotFoundPage"));
const HomePage =lazy(()=> import( "./pages/HomePage"));
const MoviesShowsPage =lazy(()=> import( "./pages/MoviesShowsPage"));
const MoviePage =lazy(()=> import( "./pages/MoviePage"));
const SeriesPage =lazy(()=> import( "./pages/SeriesPage"));
const SupportPage =lazy(()=> import( "./pages/SupportPage"));
const SubscriptionPage =lazy(()=> import( "./pages/SubscriptionPage"));

function App() {
    const queryClient=new QueryClient({
        defaultOptions:{
            queries:{staleTime:60*1000}
        }
    })
    return (
        <QueryClientProvider client={queryClient} >
            <ReactQueryDevtools/>

        <BrowserRouter>
        <Suspense fallback={<LoadingPage/>} >
        <Routes>
            <Route index element={<HomePage />}/>
            <Route path="/support" element={<SupportPage />} />
            <Route path="/subscriptions" element={<SubscriptionPage />}/>
            <Route path="/movies_shows" element={<MoviesShowsPage />}/>
            <Route path="/movies_shows/movie/:id" element={<MoviePage />} />
            <Route path="/movies_shows/series/:id" element={<SeriesPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
        </BrowserRouter>
        <Toaster position="top-center" gutter={12}  containerStyle={{margin:"8px"}} 
toastOptions={{
  success: {
    duration: 3000,
    style: {
      background: 'var(--color-green-700)',
      color: '#fff',
    },
  },
  error: {
    duration: 5000,
    style: {
      background: 'var(--color-red-700)',
      color: '#fff',
    },
  },
  style:{
    fontSize:"16px",
    maxWidth:"500px",
    padding:"16px 24px",
    backgroundColor:"var(--color-grey-0)",
    color: 'var(--color-grey-700)',
}
}}
/>
        </QueryClientProvider>
    )
}

export default App
