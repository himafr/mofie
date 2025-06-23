import { BrowserRouter, Route, Routes } from "react-router"
import NotFoundPage from "./pages/NotFoundPage"
import HomePage from "./pages/HomePage"
import MoviesShowsPage from "./pages/MoviesShowsPage"
import MoviePage from "./pages/MoviePage"

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/support" />
            <Route path="/subscriptions" />
            <Route path="/movies_shows" element={<MoviesShowsPage />}/>
            <Route path="/movies_shows/movie/:id" element={<MoviePage />} />
            <Route path="/movies_shows/show/:id" />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
            
        </BrowserRouter>
    )
}

export default App
