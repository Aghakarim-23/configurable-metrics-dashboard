import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCard from "./pages/AddCard";
import { CardProvider } from "./context/CardContext";

const App = () => {
  return (
    <CardProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-card" element={<AddCard />} />
      </Routes>
    </CardProvider>
  );
};

export default App;
