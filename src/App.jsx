import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

// Navbar ke neeche:
<Hero />
function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        {/* Hero, Features, Pricing, etc. sections will go here */}
      </div>
    </ThemeProvider>
  );
}

export default App;