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
function App() {
  return (
    <GlobalStyles>
      <Router>

        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/Signin" element={<Signin />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/MobilePage" element={<MobilePage />}></Route>
            <Route path="/LaptopPage" element={<LaptopPage />}></Route>
            <Route path="/TabletPage" element={<TabletPage />}></Route>
            <Route path="/ClockPage" element={<ClockPage />}></Route>
          </Routes>
        </div>
      </Router>

    </GlobalStyles>
  );
}

export default App;
