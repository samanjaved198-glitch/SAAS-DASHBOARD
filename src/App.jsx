import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import Showcase from "./components/showcase/Showcase";
import Pricing from "./components/pricing/Pricing";
import Testimonials from "./components/testimonials/Testimonials";
import FAQ from "./components/faq/FAQ";
import Contact from "./components/contact/Contact";
import Statistics from "./components/statistics/Statistics";
import Blog from "./components/blog/Blog";
import Comparison from "./components/comparison/Comparison";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Hero />
        <Features />
        <Statistics />
        <Showcase />
        <Pricing />
        <Comparison />
        <Testimonials />
        <FAQ />
        <Blog />
        <Contact />
        <Footer />
        
      </div>
    </ThemeProvider>
  );
}

export default App;