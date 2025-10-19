import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Homepage/Hero";
import Featured_Categories from "./Components/Homepage/Featured_Categories";
import NewArrivals from "./Components/Homepage/NewArrivals";
import Banner from "./Components/Homepage/Banner";
import Footer from "./Components/Homepage/Footer";
import Shop from "./Components/Pages/Shop";
import SingleProduct from "./Components/Pages/SingleProduct";
import Cart from "./Components/Pages/Cart";
import Checkout from "./Components/Pages/Checkout";
import Account from "./Components/Pages/Account";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";

function App() {
  return (
      <div>
      <Navbar />
      <Routes>
        {/* Homepage route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Featured_Categories />
              <NewArrivals />
              <Banner />
              <Footer />
            </>
          }
        />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
    </div>
  );
}

export default App;
