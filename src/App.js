import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./layout/NavBar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Show from "./pages/Show";
import TVSeries from "./pages/TVSeries";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray">
        <NavBar />

        <Routes>
          {["/", "/home"].map((path, index) => (
            <Route path={path} element={<Home />} key={index} />
          ))}
          <Route path="/movies" element={<Movie />} />
          <Route path="/tvseries" element={<TVSeries />} />
          <Route path="/movies/:id" element={<Show />} />
          <Route path="/tvseries/:id" element={<Show />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
