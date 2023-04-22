import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/Route/Layout';
import Navbar from './components/Navbar';

import Home from './components/Home';
import Women from './components/Route/Women';
import Men from './components/Route/Men';
import Sales from './components/Route/Sales';
import Featured from './components/Route/Featured';
import Footer from "./components/Footer";
import './App.css';
import AboutUs from "./components/Route/AboutUs";
import Contact from "./components/Route/Contact";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
         <Route path="women" element={<Women />} /> 
         <Route path="men" element={<Men />} /> 
         <Route path="sales" element={<Sales />} /> 
         <Route path="f" element={<Featured />} /> 
         <Route path="about" element={<AboutUs />} />
         <Route path="c" element={<Contact />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
