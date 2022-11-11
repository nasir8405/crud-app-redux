import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/Home";
import { Navigation } from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import { ViewUser } from "./components/Home/ViewUser";
function App() {
  return (
    <div className="App">
      <Navigation />
      <h3 className="bg-secondary text-dark p-2">
        THE MOST FAMOUS ATHLETES IN THE WORLD
      </h3>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="user/:id" element={<ViewUser />} />
      </Routes>
    </div>
  );
}

export default App;
