import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Shop";
import Checkout from "./Checkout";
import ProductDetail from "./ProductDetail";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "swiper/css";
import Header from "./Header";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop/:categoryy" element={<Shop />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
