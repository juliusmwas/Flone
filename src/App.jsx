import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Homepage/Hero";
import Featured_Categories from "./Components/Homepage/Featured_Categories";
import NewArrivals from "./Components/Homepage/NewArrivals";
import Banner from "./Components/Homepage/Banner";
import Footer from "./Components/Homepage/Footer";
import Shop from "./Components/Pages/Shop";

function App() {
  return (
    <BrowserRouter>
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

        {/* Shop page route */}
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
