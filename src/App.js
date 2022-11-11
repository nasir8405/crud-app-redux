import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/Home";
import { Navigation } from "./components/Navigation/Navigation";
function App() {
  return (
    <div className="App">
      <Navigation />
      <h3 className="bg-secondary text-dark p-2">
        THE MOST FAMOUS ATHLETES IN THE WORLD
      </h3>
      <HomePage />
    </div>
  );
}

export default App;
