import GlobalStyles from "./components/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Pages/Home";
import About from "./components/Pages/Aboutus";
import Signin from "./components/Pages/Signin";
function App() {
  return (
    <GlobalStyles>
      <Router>

        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Aboutus" element={<About />}></Route>
            <Route path="/Signin" element={<Signin />}></Route>
          </Routes>
        </div>
      </Router>

    </GlobalStyles>
  );
}

export default App;
