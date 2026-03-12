import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
          <Route
      path="/checkout"
      element={
        <ProtectedRoute>
          <Checkout />
        </ProtectedRoute>
      }
    />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;