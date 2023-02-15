import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainPart from "./Components/MainPart";
import MovieDetails from "./Components/MovieDetails";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPart />} />
          <Route path="/moviedetailsm/:filmId" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
