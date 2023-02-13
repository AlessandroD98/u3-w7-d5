import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainPart from "./Components/MainPart";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPart />
    </div>
  );
}

export default App;
