import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductMenu from "./components/ProductMenu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:proId" element={<ProductMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
