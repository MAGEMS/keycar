import Aos from "aos";
import { useEffect } from "react";
import SrollTop from "./components/common/ScrollTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";

if (typeof window !== "undefined") {
  import("bootstrap");
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";
import Home from "./pages/";
import OurFleet from "./pages/OurFleet";
import BlogListV1 from "./pages/blogs/blog-list-v1";
import BlogListV2 from "./pages/blogs/blog-list-v2";
import BlogSingleDynamic from "./pages/blogs/blog-details";
import NotFoundPage from "./pages/not-found";
import About from "./pages/others/about";
import BecomeExpert from "./pages/others/become-expert";
import HelpCenter from "./pages/others/help-center";
import LogIn from "./pages/others/login";
import SignUp from "./pages/others/signup";
import Terms from "./pages/others/terms";
import Invoice from "./pages/others/invoice";
import CarListPage1 from "./pages/car/car-list-v1";
import CarListPage2 from "./pages/car/car-list-v2";
import CarListPage3 from "./pages/car/car-list-v3";
import CarSingleV1Dynamic from "./pages/car/car-single";
import Contact from "./pages/others/contact";
import BookingPage from "./pages/car/booking-page"; // added import


function App() {

  //doAuth();
  

  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });


  }, []);

  return (
    <main>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />

              <Route path="blog-list-v1" element={<BlogListV1 />} />
              <Route path="blog-list-v2" element={<BlogListV2 />} />
              <Route path="blog-details/:id" element={<BlogSingleDynamic />} />

              <Route path="404" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />

              <Route path="about" element={<About />} />
              <Route path="our-fleet" element={<OurFleet />} />
              <Route path="become-expert" element={<BecomeExpert />} />
              <Route path="help-center" element={<HelpCenter />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<LogIn />} />
              <Route path="terms" element={<Terms />} />
              <Route path="invoice" element={<Invoice />} />
              <Route path="contact" element={<Contact />} />

              <Route path="car-list-v1" element={<CarListPage1 />} />
              <Route path="car-list-v2" element={<CarListPage2 />} />
              <Route path="car-list-v3" element={<CarListPage3 />} />
              <Route path="car-single/:id" element={<CarSingleV1Dynamic />} />

              <Route path="car-booking/:car" element={<BookingPage />} /> // added route
            </Route>
          </Routes>
          <ScrollTopBehaviour />
        </BrowserRouter>

        <SrollTop />
      </Provider>
    </main>
  );
}

export default App;
