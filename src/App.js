import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/products" Component={Product} />
        <Route path="/products/:id" Component={ProductDetails} />
        <Route path="/cart" Component={Cart} />
        <Route path="/checkout" Component={Checkout} />
      </Routes>
    </div>
  );
}

export default App;
