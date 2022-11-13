import GlobalStyles from "./components/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Pages/Home";
import Cart from "./components/Pages/Cart";
import Signin from "./components/Pages/Signin";
import Signup from "./components/Pages/Signup";
import MobilePage from "./components/Pages/MobilePage";
import LaptopPage from "./components/Pages/LaptopPage";
import TabletPage from "./components/Pages/TabletPage";
import ClockPage from "./components/Pages/ClockPage";
import ProductDetails from "./components/Pages/ProductDetails";
import { useEffect, useState } from "react";
function App() {
  const [clock, getClock] = useState([])
  const [laptop, getLaptop] = useState([])
  const [mobile, getMobile] = useState([])
  const [tablet, getTablet] = useState([])

  useEffect(() => {

    fetch('http://localhost:3001/productsClock')
      .then((response) => response.json())
      .then((data) => getClock(data));

  }, [])
  useEffect(() => {

    fetch('http://localhost:3001/productsLaptop')
      .then((response) => response.json())
      .then((data) => getLaptop(data));

  }, [])
  useEffect(() => {

    fetch('http://localhost:3001/productsMobile')
      .then((response) => response.json())
      .then((data) => getMobile(data));

  }, [])
  useEffect(() => {

    fetch('http://localhost:3001/productsTablet')
      .then((response) => response.json())
      .then((data) => getTablet(data));

  }, [])
  return (
    <GlobalStyles>
      <Router>

        <div className="App">
          <Routes>

            <Route path="/" element={<Home clock={clock} laptop={laptop} mobile={mobile} tablet={tablet} />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/Signin" element={<Signin />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/MobilePage" element={<MobilePage mobile={mobile} />}></Route>
            <Route path="/LaptopPage" element={<LaptopPage laptop={laptop} />}></Route>
            <Route path="/TabletPage" element={<TabletPage tablet={tablet} />}></Route>
            <Route path="/ClockPage" element={<ClockPage clock={clock} />}></Route>
            <Route path="/ProductDetails/:id" element={<ProductDetails clock={clock} laptop={laptop} mobile={mobile} tablet={tablet} />}></Route>
          </Routes>



        </div>
      </Router>

    </GlobalStyles >
  );
}

export default App;
