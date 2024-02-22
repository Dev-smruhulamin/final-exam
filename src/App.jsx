import "./App.css";
import Home from "./Ui/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./Ui/Header";
import Details from "./Ui/Details";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:idMeal" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
