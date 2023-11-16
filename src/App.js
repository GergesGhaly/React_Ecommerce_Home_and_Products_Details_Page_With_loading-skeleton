import "./App.css";
import Nav from "./component/Nav";
import Slider from "./component/Slider";
import ProductList from "./component/ProductList";
import { Routes, Route } from "react-router-dom";
import About from "./component/About";
import ProductDetail from "./component/ProductDetail";
import Cart from "./component/Cart";
import "./bootstrap-5.0.2-dist/css/bootstrap.min.css";
import "./bootstrap-5.0.2-dist/js/bootstrap.bundle.js";

function App() {
  const loading = <h1>Loading</h1>;

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />

              <ProductList />
            </>
          }
        />

        <Route path="about" element={<About />} />
        <Route path="ProductDetail/:id" element={<ProductDetail />} />
        <Route path="Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
