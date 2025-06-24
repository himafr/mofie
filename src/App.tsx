import { BrowserRouter, Route, Routes } from "react-router"
import NotFoundPage from "./pages/NotFoundPage"
import HomePage from "./pages/HomePage"
import MoviesShowsPage from "./pages/MoviesShowsPage"
import MoviePage from "./pages/MoviePage"
import SeriesPage from "./pages/SeriesPage"
import SupportPage from "./pages/SupportPage"
import SubscriptionPage from "./pages/SubscriptionPage"

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/support" element={<SupportPage />} />
            <Route path="/subscriptions" element={<SubscriptionPage />}/>
            <Route path="/movies_shows" element={<MoviesShowsPage />}/>
            <Route path="/movies_shows/movie/:id" element={<MoviePage />} />
            <Route path="/movies_shows/series/:id" element={<SeriesPage />} />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
            
        </BrowserRouter>
    )
}

export default App
