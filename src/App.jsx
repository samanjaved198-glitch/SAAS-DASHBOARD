import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import Showcase from "./components/showcase/Showcase";
import Pricing from "./components/pricing/Pricing";
import Testimonials from "./components/testimonials/Testimonials";

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
        {/* Showcase, Pricing, Comparison, Testimonials, FAQ, Blog, Contact, Footer will go here */}
      </div>
    </ThemeProvider>
  );
}

export default App;