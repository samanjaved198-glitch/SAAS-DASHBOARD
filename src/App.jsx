import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import TrustedCompanies from "./components/common/TrustedCompanies";
import Features from "./components/features/Features";
import Statistics from "./components/statistics/Statistics";
import Showcase from "./components/showcase/Showcase";
import Pricing from "./components/pricing/Pricing";
import Comparison from "./components/comparison/Comparison";
import Testimonials from "./components/testimonials/Testimonials";
import FAQ from "./components/faq/FAQ";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import BackToTop from "./components/common/BackToTop";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-background text-text-primary min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <TrustedCompanies />
          <Features />
          <Statistics />
          <Showcase />
          <Pricing />
          <Comparison />
          <Testimonials />
          <FAQ />
          <Blog />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;