import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./layout/NavBar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import SingleMovie from "./pages/SingleMovie";
import SingleTVSeries from "./pages/SingleTVSeries";
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
          <Route path="/movies/:sid" element={<SingleMovie />} />
          <Route path="/tvseries/:sid" element={<SingleTVSeries />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
