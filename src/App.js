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
  const [numberCart, setNumberCart] = useState(0)
  const [listCart, setListCart] = useState([])
  useEffect(() => {

    fetch('https://hickory-olive-countess.glitch.me/productsClock')
      .then((response) => response.json())
      .then((data) => getClock(data));

  }, [])
  useEffect(() => {

    fetch('https://hickory-olive-countess.glitch.me/productsLaptop')
      .then((response) => response.json())
      .then((data) => getLaptop(data));

  }, [])
  useEffect(() => {

    fetch('https://hickory-olive-countess.glitch.me/productsMobile')
      .then((response) => response.json())
      .then((data) => getMobile(data));

  }, [])
  useEffect(() => {

    fetch('https://hickory-olive-countess.glitch.me/productsTablet')
      .then((response) => response.json())
      .then((data) => getTablet(data));

  }, [])


  return (
    <GlobalStyles>
      <Router>

        <div className="App">
          <Routes>

            <Route path="/" element={
              <Home clock={clock}
                laptop={laptop}
                mobile={mobile}
                tablet={tablet}
                numberCart={numberCart} setNumberCart={setNumberCart}
              />}></Route>
            <Route path="/Cart" element={<Cart

              clock={clock}
              laptop={laptop}
              mobile={mobile}
              tablet={tablet}
              listCart={listCart} setListCart={setListCart}
              numberCart={numberCart} setNumberCart={setNumberCart}

            />}></Route>
            <Route path="/Signin" element={<Signin />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/MobilePage" element={<MobilePage
              mobile={mobile}
              numberCart={numberCart} setNumberCart={setNumberCart}
            />}></Route>
            <Route path="/LaptopPage" element={<LaptopPage
              laptop={laptop}
              numberCart={numberCart} setNumberCart={setNumberCart}
            />}></Route>
            <Route path="/TabletPage" element={<TabletPage
              tablet={tablet}
              numberCart={numberCart} setNumberCart={setNumberCart}
            />}></Route>
            <Route path="/ClockPage" element={<ClockPage
              clock={clock}
              numberCart={numberCart} setNumberCart={setNumberCart}
            />}></Route>
            <Route path="/ProductDetails/:id" element={<ProductDetails
              clock={clock}
              laptop={laptop}
              mobile={mobile}
              tablet={tablet}
              listCart={listCart} setListCart={setListCart}
              numberCart={numberCart} setNumberCart={setNumberCart}
            />}>
            </Route>
          </Routes>



        </div>
      </Router>

    </GlobalStyles >
  );
}

export default App;
