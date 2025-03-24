import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from "./pages/home.tsx";
import Character from "./pages/character.tsx";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/character/:id" element={<Character />} />
    </Routes>
  );
}

export default App;
