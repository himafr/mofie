import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import ActorPage from "./pages/ActorPage";
import LoadingPage from "./ui/state/LoadingPage";


const NotFoundPage =lazy(()=> import( "./pages/NotFoundPage"));
const HomePage =lazy(()=> import( "./pages/HomePage"));
const SupportPage =lazy(()=> import( "./pages/SupportPage"));
const SubscriptionPage =lazy(()=> import( "./pages/SubscriptionPage"));
const MoviesPage =lazy(()=> import( "./pages/MoviesPage"));
const MoviePage =lazy(()=> import( "./pages/MoviePage"));
const ShowsPage =lazy(()=> import( "./pages/ShowsPage"));
const ShowPage =lazy(()=> import( "./pages/ShowPage"));
const ListPage =lazy(()=> import( "./pages/ListPage"));
const ListRatedPage =lazy(()=> import( "./pages/ListRatedPage"));

function App() {
    const queryClient=new QueryClient({
        defaultOptions:{
            queries:{staleTime:5*60*1000}
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
            <Route path="/movies" element={<MoviesPage />}/>
            <Route path="/movies/rated/:id" element={<ListRatedPage isMovie />} />
            <Route path="/movies/:id" element={<ListPage isMovie />} />
            <Route path="/movies/movie/:id" element={<MoviePage />} />
            <Route path="/shows" element={<ShowsPage />}/>
            <Route path="/shows/:id" element={<ListPage isMovie={false} />} />
            <Route path="/shows/show/:id" element={<ShowPage />} />
            <Route path="/person/:id" element={<ActorPage />} />
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
