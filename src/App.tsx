/* eslint-disable react-hooks/exhaustive-deps */

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Team from "./components/team";
import Services from "./components/services";
import Home from "./components/home";
import History from "./components/history";
import Header from "./components/header";
import Footer from "./components/footer";
import Career from "./components/career";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/team" element={<Team />} />
          <Route path="/career" element={<Career />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
