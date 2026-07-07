import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import TrustedCompanies from "./components/common/TrustedCompanies";
import Features from "./components/features/Features";
import ParticleBackground from "./components/common/ParticleBackground";
import BackToTop from "./components/common/BackToTop";
import ErrorBoundary from "./components/common/ErrorBoundary";
import PageLoader from "./components/common/PageLoader";

// Below-the-fold sections are code-split so they aren't part of the initial bundle.
const Statistics = lazy(() => import("./components/statistics/Statistics"));
const Showcase = lazy(() => import("./components/showcase/Showcase"));
const Pricing = lazy(() => import("./components/pricing/Pricing"));
const Comparison = lazy(() => import("./components/comparison/Comparison"));
const Testimonials = lazy(() => import("./components/testimonials/Testimonials"));
const FAQ = lazy(() => import("./components/faq/Faq"));
const Blog = lazy(() => import("./components/blog/Blog"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Footer = lazy(() => import("./components/footer/Footer"));
const AIChatWidget = lazy(() => import("./components/common/AIChatWidget"));
const ThemeCustomizer = lazy(() => import("./components/common/ThemeCustomizer"));

// Lightweight skeleton shown while a lazy section's chunk is loading.
function SectionSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 animate-pulse" aria-hidden="true">
      <div className="h-6 w-40 bg-white/5 rounded-full mb-6" />
      <div className="h-10 w-2/3 bg-white/5 rounded-lg mb-4" />
      <div className="h-4 w-1/2 bg-white/5 rounded-lg" />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
    <AuthProvider>
      <ThemeProvider>
        <div
          className="relative min-h-screen overflow-x-hidden transition-colors duration-300"
          style={{
            backgroundColor: "var(--color-background)",
            color: "var(--color-text-primary)",
          }}
        >
          <PageLoader />
          <ParticleBackground />

          {/* Global toast notification host — used for form submissions, auth, theme changes, etc. */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "var(--color-surface)",
                color: "var(--color-text-primary)",
                border: "1px solid rgba(255,255,255,0.1)",
                fontSize: "14px",
              },
            }}
          />

          {/* Global background glow orbs */}
          <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
            <div className="absolute rounded-full blur-3xl opacity-20"
              style={{ width: "600px", height: "600px", top: "-100px", left: "-200px",
                background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)" }}
            />
            <div className="absolute rounded-full blur-3xl opacity-15"
              style={{ width: "500px", height: "500px", top: "40%", right: "-150px",
                background: "radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)" }}
            />
            <div className="absolute rounded-full blur-3xl opacity-10"
              style={{ width: "400px", height: "400px", bottom: "10%", left: "30%",
                background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
            />
          </div>

          <Navbar />
          <main id="main-content">
            <Hero />
            <TrustedCompanies />
            <Features />
            <Suspense fallback={<SectionSkeleton />}>
              <Statistics />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <Showcase />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <Pricing />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <Comparison />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <Testimonials />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <FAQ />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <Blog />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <Contact />
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
          <BackToTop />
          <Suspense fallback={null}>
            <AIChatWidget />
          </Suspense>
          <Suspense fallback={null}>
            <ThemeCustomizer />
          </Suspense>
        </div>
      </ThemeProvider>
    </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;