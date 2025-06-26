import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import LoadingPage from "./state/LoadingPage";


const NotFoundPage =lazy(()=> import( "./pages/NotFoundPage"));
const HomePage =lazy(()=> import( "./pages/HomePage"));
const MoviesShowsPage =lazy(()=> import( "./pages/MoviesShowsPage"));
const MoviePage =lazy(()=> import( "./pages/MoviePage"));
const SeriesPage =lazy(()=> import( "./pages/SeriesPage"));
const SupportPage =lazy(()=> import( "./pages/SupportPage"));
const SubscriptionPage =lazy(()=> import( "./pages/SubscriptionPage"));

function App() {
    return (
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
    )
}

export default App
