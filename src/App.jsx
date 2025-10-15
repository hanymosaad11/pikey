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
import About from "./Components/9-About/About";
import Faq from "./Components/10-Faq/Faq";
import PrivacyPolicy from "./Components/11-PrivacyPolicy/PrivacyPolicy";
import Blog from "./Components/12-Blog/Blog";
import BlogSingle from "./Components/13-BlogSingle/BlogSingle";
import Contact from "./Components/14-Contact/Contact";
import Cart from "./Components/15-Cart/Cart";
import CheckoutPage from "./Components/16-CheckoutPage/CheckoutPage";
import OrderConfirmed from "./Components/17-OrderConfirmed/OrderConfirmed";
import Filed from "./Components/17-OrderConfirmed/filed";
import Error404 from "./Components/18-Error404/Error404";
import Error419 from "./Components/18-Error404/Error419";
import CompareSection from "./Components/19-CompareSection/CompareSection";
import Wishlist from "./Components/20-Wishlist/Wishlist";
import Signup from "./Components/22-Signup/Signup";
import ProductDetails from "./Components/23-ProductDetails/ProductDetails";

// الصفحات اللي مش عايز يظهر فيها الهيدر
const hideHeaderPaths = ["/signup", "/login"];
export default function App() {
  return (
    <>
      <Router>
        {!hideHeaderPaths.includes(location.pathname) && <Header />}

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:id" element={<BlogSingle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/checkoutpage" element={<CheckoutPage />} />

          {/* لسه هعملهاهحدد مكانها  بعدين؟ */}
          <Route path="/orderconfirmed" element={<OrderConfirmed />} />
          <Route path="/filed" element={<Filed />} />
          <Route path="/error404" element={<Error404 />} />
          <Route path="/error419" element={<Error419 />} />
          <Route path="/comparesection" element={<CompareSection />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productdetails" element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  );
}
