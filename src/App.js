import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

const App = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shop" element={<Shop/>} />
    </Routes>
  </BrowserRouter>

}

export default App;
