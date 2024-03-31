import "bootstrap/dist/css/bootstrap.min.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import CardSubPage from "./view/CardSubPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageNotFound from "./view/PageNotFound";
import Home from "./view/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cardSubPage/:id" element={<CardSubPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
