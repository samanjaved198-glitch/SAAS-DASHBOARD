import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import Showcase from "./components/showcase/Showcase";
import Pricing from "./components/pricing/Pricing";
import Testimonials from "./components/testimonials/Testimonials";
import FAQ from "./components/faq/FAQ";
function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
        <Testimonials />
        <FAQ />
        {/* Showcase, Pricing, Comparison, Testimonials, FAQ, Blog, Contact, Footer will go here */}
      </div>
    </ThemeProvider>
  );
}

export default App;