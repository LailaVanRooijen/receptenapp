import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./genericComponents/NavBar";
import AllRecipesPage from "./pages/AllRecipesPage";
import RecipePage from "./pages/RecipePage";
import AddRecipePage from "./pages/AddRecipePage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipes" element={<AllRecipesPage />} />
        <Route path="/add-recipe" element={<AddRecipePage />} />
        <Route path="/recipes/:id" element={<RecipePage />} />
      </Routes>
    </>
  );
}

export default App;
