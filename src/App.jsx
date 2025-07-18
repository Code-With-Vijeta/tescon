import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import OverviewSection from "./OverviewSection";
import TesconProjectsSection from "./TesconProjectsSection";
import IntroSection from "./IntroSection";
import AboutUsSection from "./AboutUsSection";
import TalkToUs from "./TalkToUs";
import AddressSection from "./AddressSection";
import Footer from "./Footer";
import WhatsAppButton from "./Whtsapp";
import AboutPage from "./AboutUsPage"; 
import Services from "./ServicesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
              <OverviewSection />
              <IntroSection />
              <TesconProjectsSection />
              <AboutUsSection />
              <AddressSection />
              <TalkToUs />
              <Footer />
              <WhatsAppButton />
            </>
          }
        />
        <Route path="/about" element={
          <>
          <Navbar />
          <AboutPage />
          <Footer />
          <WhatsAppButton />
          </>} />
          <Route path="/services" element={
          <>
          <Navbar />
          <Services />
          <Footer />
          <WhatsAppButton />
          </>} />
      </Routes>
    </Router>
  );
}

export default App;
