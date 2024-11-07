import { useRef, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./components/Footer";

function App() {
  const scrollRef = useRef(null); // Initialize scrollRef

  useEffect(() => {
    if (scrollRef.current) {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => {
        locomotiveScroll.destroy(); // Clean up on component unmount
      };
    }
  }, []);

  const location = useLocation();

  const getHeaderComponent = () => {
    const headerRoutes = ["/", "/active-pharmaceutical-ingredients"];
    if (headerRoutes.includes(location.pathname)) {
      return <Header />;
    }
    return null;
  };

  return (
    <div ref={scrollRef} className="scroll-container"> {/* Add ref to the container */}
      {getHeaderComponent()}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
