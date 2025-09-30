import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/0-header/Header";
import Banner from "./Components/1-Banner/Banner";
import PromoSection from "./Components/2-PromoSection/PromoSection";
import Promotion from "./Components/3-Promotion/Promotion";
import WinterSection from "./Components/4-WinterSection/WinterSection";
import FooterSection from "./Components/5-FooterSection/FooterSection";
import Products from "./Components/6-Products/Products";
import Categories from "./Components/7-Categories/Categories";
import Profile from "./Components/8-Profile/Profile";

export default function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <PromoSection />
                <Promotion />
                <WinterSection />
                <FooterSection />
              </>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Router>
    </>
  );
}
